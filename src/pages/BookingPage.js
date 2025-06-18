import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';

// Step 1: Reducer function
const updateTimes = (state, action) => {
  // For now, we return static times. Later, you can make this dynamic.
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Step 2: Initializer
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export default function BookingPage() {
  // Step 3: useReducer with initializer
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

  return (
    <section className="booking-page">
      <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} />
    </section>
  );
}
