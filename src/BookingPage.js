import { VStack } from '@chakra-ui/react';
import './App.css';
import BookingForm from "./BookingForm";

function BookingPage() {
    return (
        <div className='bookingForm' style={{
            display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'center',
       flexShrink: '0',
       gap:'20',
       paddingTop: '50px',
       paddingBottom: '50px'
        }}>
        <VStack>
        <h1 textAlign='center'>Book your Table</h1>
        <br></br>
        <BookingForm />
        </VStack>
        </div>
    )
}

export default BookingPage;