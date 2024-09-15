const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
dotenv.config();
const cors = require('cors');
const morgan = require('morgan');

const passport = require('./config/passportConfig');
const loginRoutes = require('./routes/authRoutes/loginRoute');
const registerRoutes = require('./routes/authRoutes/registrationRoute');

const port = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;
mongoose.set("strictQuery", false);

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set secure only in production
        sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax', // SameSite: 'None' for production (cross-site)
    }
}));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send(' Q 1 Hello World!');
});
app.use('/api/auth', loginRoutes);
app.use('/api/auth', registerRoutes);

const start = async() => {
    try {
        await mongoose.connect(CONNECTION);
        app.listen(port, '0.0.0.0', () => {
            console.log(`App listening at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error.message);
    }
}
start();
module.exports = app;
