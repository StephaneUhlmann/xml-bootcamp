const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
express = require('express'),
cors = require('cors'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));
app.use(cors());

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://3000-crimson-fowl-h0ijaps8.ws-eu03.gitpod.io/");
    next();
});

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));