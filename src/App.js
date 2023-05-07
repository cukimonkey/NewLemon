
import './App.css';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Nav from './Nav';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
