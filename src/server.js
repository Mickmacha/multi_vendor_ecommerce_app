const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
dotenv.config();
const cors = require('cors');

const passport = require('./config/passportConfig');

const port = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;
mongoose.set("strictQuery", false);

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // React app URL
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const start = async() => {
    try {
        await mongoose.connect(CONNECTION);
        app.listen(port, () => {
            console.log(` App listening at port:${port}`);
        });
    } catch (error) {
        console.log(error.message);
    }
}
start();
module.exports = app;
