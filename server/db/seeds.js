use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Paul Hamill",
        email: "paul.hamill@gmail.com",
        checkin: ""
    },
    {
        name: "Elon Musk",
        email: "elon.musk@gmail.com",
        checkin: ""
    },
    {
        name: "Jack Sparrow",
        email: "j.sparrow@gmail.com",
        checkin: ""
    },
])