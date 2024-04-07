const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

mongoose.set("strictQuery", false);
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const start = async() => {
    try {
        await moongoose.connect(CONNECTION);
        app.listen(port, () => {
            console.log(` App listening at port:${port}`);
        });
    } catch (error) {
        console.log(error.message);
    }
}