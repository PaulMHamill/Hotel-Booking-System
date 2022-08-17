import BookingCard from "./BookingCard";

const BookingsGrid = ({bookings, updateBooking, removeBooking}) => {
    const bookingsList = bookings.map((booking) => {
        return <BookingCard booking={booking} key={booking._id} updateBooking={updateBooking} removeBooking={removeBooking} />
    });

    return (
        <>
            {bookingsList}
        </>
    );
}

export default BookingsGrid