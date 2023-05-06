import { VStack } from '@chakra-ui/react';
import './App.css';
import BookingForm from "./BookingForm";

function BookingPage() {
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
        <BookingForm />
        </VStack>
        
    )
}

export default BookingPage;