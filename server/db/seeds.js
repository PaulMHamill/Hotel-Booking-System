use guests;
db.dropDatabase();

db.bookings.insertMany([
    {
        "name": "Paul Hamill",
        "email": "paul.hamill@gmail.com",
        "checked_in": true
    },
    {
        "name": "Elon Musk",
        "email": "elon.musk@gmail.com",
        "checked_in": true
    },
    {
        "name": "Jack Sparrow",
        "email": "j.sparrow@gmail.com",
        "checked_in": false
    },
])