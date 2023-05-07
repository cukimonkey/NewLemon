import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { initializeTimes, updateTimes } from './BookingPage';

test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book your Table");
  expect(headingElement).toBeInTheDocument();
})

//Testing the updateTimes and initializeTimes functions
test('initializeTimes returns an array of strings', () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.every((t) => typeof t === 'string')).toBe(true);
});


test('updateTimes returns the same value as provided in state', () => {
  const date = '2023-05-10'; // arbitrary date for testing purposes
  const currentState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const updatedTimes = updateTimes(currentState, date);
  expect(updatedTimes).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00']);
});
