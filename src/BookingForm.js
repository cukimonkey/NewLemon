import React, {useState} from "react";

const BookingForm = () => {


    const [inputs, setInputs] = useState({});

    const  availableTimes = [
        '17:00', 
        '18:00',
        '19:00',
        '20:00',
        '21:00'
    ]

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }

      const timeOptions = availableTimes.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ));

    return (
        
    <form onSubmit={handleSubmit} className='BookingForm' style={{display: "grid", maxWidth: "300px", gap: '20px'}}>
       <label>Enter your name:</label>
        <input type='text' name="username" value={inputs.username || ""} onChange={handleChange}/>

        <label>Enter your number:</label>
        <input type='text' name="number" value={inputs.number || ""} onChange={handleChange}/>

        <label>Enter Your email:</label>
        <input type='email' name="email" value={inputs.email || ""} onChange={handleChange}/>

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date"/>

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="time" value={inputs.time || ""} onChange={handleChange}>
        {timeOptions}
      </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <br></br>
        <input type="submit" value="Make Your reservation"/>
</form>
    )
}

export default BookingForm;