import { VStack } from '@chakra-ui/react';
import './App.css';
import BookingForm from "./BookingForm";
import React, { useReducer, useEffect } from 'react';
import { fetchAPI } from './api';


const initializeTimes = async () => {
    // Use the current date to initialize the available times
    try{
    const today = new Date();
    const availableTimes = await fetchAPI(today);
    return availableTimes || [];
    
  } catch (error) {
    console.error(error);
    return [];
  }
}

  const updateTimes = async (state, date) => {
    // Convert the date string to a Date object
    const dateObj = new Date(date);
    // Use the selected date to update the available times
    console.log("updateTimes called with date:", dateObj);
    const availableTimes = await fetchAPI(dateObj);
    console.log("fetchAPI returned:", availableTimes);
    return {
        type: 'update',
        payload: availableTimes,
      };
    };

    function reducer(state, action) {
        switch (action.type) {
          case 'update':
            return action.payload;
          default:
            throw new Error();
        }
      }


export { initializeTimes, updateTimes };


//Booking page function
function BookingPage() {
    const [availableTimes, dispatch] = useReducer(reducer, []);

    useEffect(() => {
      const initializeTimes = async () => {
        const today = new Date();
        const availableTimes = await fetchAPI(today);
        dispatch({ type: 'update', payload: availableTimes });
      }
      initializeTimes();
    }, [dispatch]);
  
    const handleDateChange = async (date) => {
      const availableTimes = await fetchAPI(date);
      dispatch({ type: 'update', payload: availableTimes });
    };
  
return (
        
        <VStack style={{
            width: '100%',
            paddingLeft: '50px',
            display: 'grid',
            gridColumn: '1fr',
            marginTop: '50px',
            marginBottom: '50px',
            justifyContent: 'center'
        }}>
        <h1 textAlign='center'>Book your Table</h1>
        <br></br>
        <BookingForm availableTimes={availableTimes} handleDateChange={handleDateChange}/>
        </VStack>
        
    )
}

export default BookingPage;