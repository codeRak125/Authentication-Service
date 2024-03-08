const express = require("express");
const app = express();
const PORT = 3000;

const userRoute = require("./routes/user.rest");

app.use(express.json());

app.use( "/user", userRoute);


module.exports.start = function () { 
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})};