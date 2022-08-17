
import { useState, useEffect } from "react";

import './App.css';

import BookingsForm from "./BookingsForm";
import BookingsGrid from "./BookingsGrid";
import { getBookings} from "./BookingService"

function App() {

  const [guestBookings, setGuestBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings)=>{
      setGuestBookings(allBookings);
    })
  }, []);

  const addBooking = (booking) => {
    const temp = guestBookings.map(s =>s);
    temp.push(booking);
    setGuestBookings(temp);
  };

  const updateBooking = updatedBooking => {
    // req to server to update booking in DB
    getBookings.updateBooking(updatedBooking);

    // update locally
    const updatedBookingIndex = guestBookings.findIndex(booking => booking._id === updatedBooking._id);
    const updatedBookings = [...guestBookings];
    updatedBookings[updatedBookingIndex] = updatedBooking;
    setGuestBookings(updatedBookings);
  };

  const removeBooking = (id) => {
    const temp = guestBookings.map(s =>s);
    const indexToDel = temp.map(s => s.id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setGuestBookings(temp);
  };

  return (
    <>
    <BookingsForm addBooking={addBooking}/>
    <BookingsGrid bookings={guestBookings} removeBooking={removeBooking} updateBooking={updateBooking} />
    </>

  );
}

export default App;
