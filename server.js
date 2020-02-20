const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');

//initialize express in app
const app = express();

// middleware
app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

//get mongo URI
const db = config.get('mongoURI');

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define the routes
// const auth = require('./routes/auth')
// app.use('/auth', auth);
const Users = require('./routes/Users')
app.use('/users', Users);

//set up port to listen
const PORT = 8000
app.listen(PORT, () => console.log(`Sever started on port: ${PORT}`));