// Express js:- Web framework for Node js.
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/', ((req, res) => {
    res.send("Hello World");
}))

app.get('/twitter', ((req, res) => {
    res.send("<h1>Neha Singh</h1>");
}))

app.listen(PORT, () => {
    console.log(`starting development server on port: ${PORT}`)
});