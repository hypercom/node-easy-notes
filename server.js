const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//parse requests of content-type = application/json
app.use(bodyParser.json());

//Config database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connecting to database
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        console.log('Successfully connected to the database');
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });

//define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EaseNotes app. Take notes quickly. Organize and keep track of all your notes." });
});

//require notes routes
require('./app/routes/note.routes.js')(app);

//listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
