import React, {useState} from "react";


const BookingForm = () => {


    const [inputs, setInputs] = useState({});
    const [errors, setErrors]= useState({});
    const  availableTimes = [
        '17:00', 
        '18:00',
        '19:00',
        '20:00',
        '21:00'
    ]

    const occasions = [
        "Birthday",
        "Anniversary",
        "Engagement"
    ]

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((prevValues) => ({...prevValues, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            alert(JSON.stringify(inputs));
            setInputs({});
          }
      }

      const validate = () => {
        let errors = {};
        let isValid = true;
        if (!inputs['number']){
            isValid = false;
            errors['number']="Please enter your Mobile Number.";
        }
        if (typeof inputs['number'] !== 'undefined') {
            const pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
            if (!pattern.test(inputs['number'])){
                isValid = false;
                errors['number'] = "Please Enter Number Only";
            } 
        } setErrors(errors);
         return isValid;
        };
      
      const timeOptions = availableTimes.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ));

      const occasionOptions = occasions.map((options) => (
        <option key={options} value={options}>{options}</option>
      ));


    return (
        
    <form onSubmit={handleSubmit} className='BookingForm' style={{display: "grid", grid: '1fr', gap: '20px'}}>
       <label>Enter your name:</label>
        <input type='text' name="username" value={inputs.username || ""} onChange={handleChange} required/>

        <label>Enter your number:</label>
        <input type='text' name="number" value={inputs.number || ""} onChange={handleChange} required/>
        {errors.number && <span style={{ color: "red" }}>{errors.number}</span>}
        
        <label>Enter Your email:</label>
        <input type='email' name="email" value={inputs.email || ""} onChange={handleChange}required/>

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" required/>

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="time" value={inputs.time || ""} onChange={handleChange}required>
        {timeOptions}
      </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" name="occasion" value={inputs.occasions || ""} onChange={handleChange}>
        {occasionOptions}
      </select>
        <br></br>
        <input type="submit" value="Make Your reservation"/>
</form>
    )
}

export default BookingForm;