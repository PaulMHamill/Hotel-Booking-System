import {useState} from "react";
import { postBooking } from "./BookingService";

const BookingsForm = ({addBooking}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [checkedIn, setCheckedIn] = useState(false);

    const handleNameChange = (ev) => setName(ev.target.value);
    const handleEmailChange = (ev) => setEmail(ev.target.value);
    const handleCheckInChange = (ev) => setCheckedIn(ev.target.checked ? ev.target.checked : false);

    const handleSubmit = ev => {
        ev.preventDefault();
        addBooking({
          name: name,
          email: email,
          checked_in: checkedIn
        });
        setName("");
        setEmail("");
        setCheckedIn(false);
      }

    return (
        <form onSubmit={handleSubmit} id="bookings-form" >
            <h2>Add a Booking</h2>
            <div className="formWrap">
                <lable htmlFor="name">Guest Name:</lable>
                <input
                    type='text'
                    id="name"
                    name="name"
                    value={name}
                    required
                    onChange={handleNameChange}
                    />
            </div>
            <div className="formWrap">
                <lable htmlFor="email">Guest Email</lable>
                <input 
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    required
                    onChange={handleEmailChange}
                    />
            </div>
            <div className="formWrap">
                <label htmlFor="checked_in">Checked In:</label>
                <input
                    type="checkbox"
                    id="checked_in"
                    name="checked_in"
                    value={checkedIn}
                    onChange={handleCheckInChange}
                    />
            </div>

            <input type="submit" value="Save" id="save" />
        </form>
    );

}

export default BookingsForm;