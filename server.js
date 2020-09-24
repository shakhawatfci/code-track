const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors());

// import controller 

const ScriptController = require('./src/controllers/script.controller');

app.get('/', (req, res, next) => {
    res.send('hello');
});

app.post('/script', ScriptController.create);

app.use(errorHandler());

app.listen(PORT, () => {

    console.log(`server listening to port number ${PORT}`);

});

module.exports = app;

