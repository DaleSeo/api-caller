var express = require('express');
var router = express.Router();

const path = require('path')
const callApi = require('../services/callApi')

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public', 'api.html'))
})

router.post('/', function(req, res, next) {
  console.log(req.body)
  callApi(req.body)
    .then(result => res.send(result))
    .catch(err => {
      console.log('err:', err)
      res.status(500).send({msg: err.message})
    })
})

module.exports = router;
