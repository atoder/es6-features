// Using debugger to debug
// c - to continue
// node debug debugger.js to run debug mode in command line


// npm install -g node-inspector 
// is required for command below
// node-debug debugger.js to run a browser based debugging

//var name = 'Alexander';
//var a = 12;
//var b = 22;
//
//debugger;



var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());

app.post('/', function (req, res) {
  debugger;
  res.json({
    status: 'good',
    data: req.body
  });
});

app.listen(3000);
