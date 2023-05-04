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
       paddingTop: '50px'
        }}>
        <BookingForm />
        </div>
    )
}

export default BookingPage;