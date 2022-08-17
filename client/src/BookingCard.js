import { deleteBooking } from "./BookingService";
import { useState, useEffect } from 'react';

const BookingCard = ({booking, updateBooking, removeBooking}) => {
  const [checkedInClass, setCheckedInClass] = useState("");
  const [checkInButtonText, setCheckInButtonText] = useState("");

  useEffect(() => {
    if (booking.checked_in) {
      setCheckedInClass('checked-in');
      setCheckInButtonText('Check Out')
    } else {
      setCheckedInClass('checked-out');
      setCheckInButtonText('Check In')
    }
  }, [booking.checked_in]);

  const toggleCheckIn = () => {
    updateBooking({
      _id: booking._id,
      name: booking.name,
      email: booking.email,
      checked_in: !booking.checked_in
    });
  }

  const handleRemoveBooking = () => {
    removeBooking(booking._id);
  }
    return (
        <>
        <h1 className={checkedInClass}>{booking.name}</h1>
        <p>Email: {booking.email}</p>
        <button onClick={toggleCheckIn}>{checkInButtonText}</button>
        <button onClick={handleRemoveBooking}> 🗑 </button>
        <hr></hr>
        </>
    )
}

export default BookingCard