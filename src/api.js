const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    // console.log("Date received in fetchAPI: ", date);
    // return new Promise((resolve, reject) => {
      return new Promise((resolve, reject) => {
    if (!(date instanceof Date)) {
        reject(new Error('Invalid date argument'));
        return;
      }
      let result = [];
      let random = seededRandom(date.getDate());

      for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
          result.push(i + ":00");
        }
        if (random() < 0.5) {
          result.push(i + ":30");
        }
      }
  
      // Simulate API delay of 1 second
      setTimeout(() => {
        resolve(result);
      }, 1000);
    });
  };
  

  export {fetchAPI, submitAPI};