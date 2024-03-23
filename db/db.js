const mongoose = require("mongoose");

const initializeDB = async function() { 
    await mongoose.connect("mongodb://mongo_db:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));
}

module.exports = initializeDB;