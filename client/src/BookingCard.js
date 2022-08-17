import { deleteBooking } from "./BookingService";

const BookingCard = ({booking, removeBooking}) => {

    console.log(booking);
    const handleDelete = () => {
        deleteBooking(booking._id).then(()=>{
            removeBooking(booking.id);
        })
    }
    return (
        <>
        <h1>{booking.name}</h1>
        <p>Email: {booking.email}</p>
        <p>Check in status: {booking.checkin}</p>
        <button onClick={handleDelete}> 🗑 </button>
        <hr></hr>
        </>
    )
}

export default BookingCard