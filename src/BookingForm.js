import { useState } from 'react';

function BookingForm() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const data = event.target.data;
        const value = event.target.value;
        setInputs(values => ({...values, [data]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }

    return (
    <form onSubmit={handleSubmit} className='BookingForm' style={{display: "grid", maxWidth: "300px", gap: '20px'}}>
        <label>Enter your name:</label>
        <input type='text' data="username" value={inputs.username || ""} 
        onChange={handleChange}/>
        <label>Enter your phone number:</label>
        <inpot type='text' data="number" value={inputs.number || ""} onChange={handleChange}/>
        <label>Enter Your email:</label>
        <inpot type='email' data="email" value={inputs.email || ""} onChange={handleChange}/>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date"/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
</form>
    )
}

export default BookingForm;