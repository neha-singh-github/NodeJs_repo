// Express js:- Web framework for Node js.
const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', ((req, res) => {
    res.send("Hello World");
}))

app.get('/twitter', ((req, res) => {
    res.send("<h1>Neha Singh</h1>");
}))

app.listen(process.env.PORT, () => {
    console.log(`starting development server on port: ${process.env.PORT}`)
});