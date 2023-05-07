import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
import { renderHook } from '@testing-library/react-hooks';
import { useInitializeTimes } from './BookingPage';


test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book your Table");
  expect(headingElement).toBeInTheDocument();
})

//Testing useInitializeTimes function
test('useInitializeTimes retrieves available times', async () => {
  // Set up a mock response
  const mockResponse = { availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00'] };
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    })
  );

  // Render the hook
  const { result, waitForNextUpdate } = renderHook(() => useInitializeTimes());

  // Wait for the hook to finish fetching data
  await waitForNextUpdate();

  // Expect the hook to return the expected data
  expect(result.current).toEqual(mockResponse.availableTimes);
});

//Test updateTime function
test('updateTimes updates the state correctly', async () => {
  const state = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const newState = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  // Mock the fetch function to return the new state
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ availableTimes: newState }),
    })
  );

  // Call the updateTimes function
  const updatedState = await updateTimes(state, '2023-05-07');

  // Expect the state to be updated correctly
  expect(updatedState).toEqual(newState);
});