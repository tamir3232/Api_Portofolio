var express = require('express');
var router = express.Router();
const app = express(); // app instance.
const bodyParser = require('body-parser')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/* GET home page. */

app.group('/api/v1', (router) => {
  router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
})

module.exports = app;
