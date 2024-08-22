const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const passport = require('./config/passport'); 

const port = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;
mongoose.set("strictQuery", false);

const app = express();
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

app.listen(port, () => {
    console.log(`Eapp listening at http://localhost:${port}`);
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
export default app;