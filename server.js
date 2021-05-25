const express = require('express');

const app = express();

app.use(express.json())

app.use(express.urlencoded({extended: true}));
app.use(express.static('Public'));

const userRoute = require('./Routes/user');
const authRoute = require('./Routes/auth');

app.use(userRoute);
app.use(authRoute);

app.listen(process.env.PORT, () => {
    console.log("Server Launched :)");
});