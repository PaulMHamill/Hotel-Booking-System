import {useState} from "react";
import { postBooking } from "./BookingService";

const BookingsForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkin: "",
    })

const onChange = (e) =>{
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
}

const onSubmit = (e) =>{
    e.preventDefault();
    postBooking(formData).then((data)=>{
        addBooking(data)
    })
    // Reset the form input values
    setFormData({
        name: "",
        email: "",
        checkin: "",
    });
}

return (
    <form onSubmit={onSubmit} id="bookings-form" >
        <h2>Add a Booking</h2>
        <div className="formWrap">
            <lable htmlFor="name">Guest Name:</lable>
            <input
                onChange={onChange}
                type='text'
                id="name"
                name="name"
                value={formData.name} />
        </div>
        <div className="formWrap">
            <lable htmlFor="email">Guest Email</lable>
            <input 
                onChange={onChange}
                type="text"
                id="email"
                name="email"
                value={formData.email}/>
        </div>
        <div className="formWrap">
            <label htmlFor="checkin">Check-in status:</label>
            <input
                onChange={onChange}
                type="text"
                id="checkin"
                name="checkin"
                value={formData.checkin}/>
        </div>

        <input type="submit" value="Save" id="save" />
    </form>
);

}

export default BookingsForm;