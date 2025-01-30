var express = require('express');
var router = express.Router();
const app = express(); // app instance.
const bodyParser = require('body-parser')
user = require('./users')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/* GET home page. */

app.group('/api/v1', (router) => {
  router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

  router.use('/users', user);
  router.use('/profile', require('./profile'));
})

module.exports = app;
