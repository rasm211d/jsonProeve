const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const cars = require("./Biler");

app.get('/', (req, res) => {
    res.send("<h1> HVAD SÅ!! </h1>");
})
app.get('/api/biler', (req, res) => {
    res.json(cars)
})

app.listen(PORT, console.log("Listenning on port 5000"))