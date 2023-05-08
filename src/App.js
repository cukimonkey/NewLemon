
import './App.css';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Nav from './Nav';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom';
import HoldingPage from './HoldingPage';
import BookingConfirmation from './BookingConfirmation';




function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes> 
      <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/order-online" element={<HoldingPage />}></Route>
        <Route path="/about" element={<HoldingPage />}></Route>
        <Route path="/menu" element={<HoldingPage />}></Route>
        <Route path="/login" element={<HoldingPage />}></Route>
        <Route path="/booking-confirmation" element={<BookingConfirmation />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
