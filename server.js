const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const API = require('./public/api')


let mongoose = require("mongoose");


// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("seeders"));

require("./routes/html-routes")(app);
require("./routes/workout-routes")(app);





app.listen(port, () => console.log(`Example app listening on port port!`))