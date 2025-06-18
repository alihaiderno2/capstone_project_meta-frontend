import React from "react";
import { useState } from "react";
import "./BookingForm.css";
function BookingForm({availableTimes, dispatchOnDateChange}) {
  const[date, setDate] = React.useState("");
  const[time, setTime] = React.useState("17:00");
  const[guests, setGuests] = React.useState(0);
  const[occasion, setOccasion] = React.useState("Birthday");

const [isFormValid, setIsFormValid] = useState(false);


React.useEffect(() => {
  const valid =
    date.trim() !== "" &&
    time.trim() !== "" &&
    Number(guests) >= 1 &&
    occasion.trim() !== "";
  setIsFormValid(valid);
}, [date, time, guests, occasion]);



  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${guests} guests on ${date} at ${time} for a ${occasion} occasion.`);
  }

    return (
    <>
    <div className="headingText">
      <h1>Reserve the Table</h1>
      <p>Provide the information so that we can provide you the best experience in the town.</p>
    </div>
    <div className="booking-form-container">
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {setDate(e.target.value)
          dispatchOnDateChange(new Date(e.target.value));}
        }
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      > {
            availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
            required
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="0"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" disabled={!isFormValid} aria-label="You make reservation by clicking this" />
    </form>
    </div>
    </>
  );
  }

export default BookingForm;