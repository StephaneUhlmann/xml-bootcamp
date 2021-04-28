const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
dotenv = require("dotenv");

var app = express();
var port = process.env.PORT || 3000;
dotenv.config();

app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(require('./routes'));
app.use(cors());
app.use(express.static('public'))

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://3000-crimson-fowl-h0ijaps8.ws-eu03.gitpod.io/");
    next();
});

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

//const dbURI = "mongodb://localhost/test";
const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));