import { VStack } from '@chakra-ui/react';
import './App.css';
import BookingForm from "./BookingForm";
import React, { useReducer } from 'react';



  const initializeTimes = () => {
    // Use the current date to initialize the available times
    const newTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    return newTimes;
  }
  const updateTimes = (state, date) => {
    // Use the selected date to update the available times
    const newTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    return newTimes;
  }
function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return updateTimes(state, action.date);
    default:
      throw new Error();
  }
}


export { initializeTimes, updateTimes };

function BookingPage() {  

    const [availableTimes, dispatch] = useReducer(reducer, [], initializeTimes);
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
        <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </VStack>
        
    )
}

export default BookingPage;



