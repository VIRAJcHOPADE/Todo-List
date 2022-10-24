// require the library
const mongoose = require('mongoose');

// connect to the database(mongodb atlas)
mongoose.connect('mongodb+srv://admin:virajchopade@clustertodo1.kuu1hwg.mongodb.net/?retryWrites=true&w=majority');

// aquire the connection (to check if it is successful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, "Error connecting to db"));

// up and running then print the message
db.once('open', function(){
    console.log("Successfully connected to database.");
});