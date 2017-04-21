var express = require('express');
var router = express.Router();

const path = require('path')
const callApi = require('../services/callApi')

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'api.html'))
})

router.post('/call', function(req, res, next) {
  callApi(req.body).then(result => res.send(result))
})

module.exports = router;
