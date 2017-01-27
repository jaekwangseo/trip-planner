'use strict'

const path = require('path');
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  autoescape: true,
  noCache: true,
  express: app
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(volleyball);

app.use(express.static(path.join(__dirname, '/public')));


app.use(function(req, res, next) {
   const err = new Error('Not Found');
   err.status = 404;
   next(err);
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err);
  res.render(err);
})

app.listen(3000);
