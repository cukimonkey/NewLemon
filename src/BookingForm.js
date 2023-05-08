import React, {useState} from "react";
import { submitAPI } from './api';
import { updateTimes } from "./BookingPage";


const BookingForm = ({ availableTimes, dispatch }) => {
    console.log("availableTimes: ", availableTimes);
    const [inputs, setInputs] = useState({});
    const [errors, setErrors]= useState({});
    const [state, setState] = useState({
        date: '',
        time: '',
        
      });
    
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
    
      async function handleSubmit(event) {
        event.preventDefault();
        if (validate()) {
          const success = await submitAPI(inputs);
          if (success) {
            // handle success case, e.g. show success message
            alert("Success!");
            setInputs({});
            event.target.reset(); // reset the form
          } else {
            // handle failure case, e.g. show error message
            alert("Failed to submit form.");
          }
        }
      }
    
      const validate = () => {
        let errors = {};
        let isValid = true;
        if (!inputs['number']) {
          isValid = false;
          errors['number'] = "Please enter your Mobile Number.";
        }
        if (typeof inputs['number'] !== 'undefined') {
          const pattern = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
          if (!pattern.test(inputs['number'])){
            isValid = false;
            errors['number'] = "Please Enter Number Only";
          } 
        }
        setErrors(errors);
        return isValid;
      };


      const handleDateChange = async (event) => {
        const selectedDate = event.target.value;
        const updatedTimes = await updateTimes(state, selectedDate);
        setState({ date: selectedDate, time:updatedTimes });
         dispatch({ type: 'update', date: selectedDate, time: updatedTimes });
        };
      
        
        const timeOptions = Array.isArray(availableTimes) && availableTimes.length > 0 
        ? availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))
        : <option disabled value="">No times available</option>;

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
        <input type="date" id="res-date" onChange={handleDateChange} required/>

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