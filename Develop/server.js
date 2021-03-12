const express = require('express')
const app = express()
const port = 3000
const API = require('./public/api')
const Workout = require('./models/workoutModel');

let mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("seeders"));

require("./routes/html-routes")(app);
require("./routes/workout-routes")(app);





app.listen(port, () => console.log(`Example app listening on port port!`))