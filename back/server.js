const PORT = 3001;


const app = require('express')();
const bodyParser = require('body-parser');
// var cors = require('cors');
// const { response } = require('express');

const routes = require('./routes/index')

app.use(bodyParser.json());
app.use(routes)
// app.use(cors({
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
// }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hiveDB', { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () {
  console.log('connected to DB');
});

const User = require("./models/users.model")
const Post = require("./models/posts.model")

app.listen(PORT, function () {
  console.log(`Server is running on por ${PORT}`)
})