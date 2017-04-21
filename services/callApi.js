const superagent = require('superagent')

function callApi (req) {
  return superagent(req.method, req.url)
    .send(req.body)
    .then(res => {
      return {
        statusCode: res.statusCode,
        statusText: res.statusText,
        headers: res.header,
        body: res.body,
        text: res.text
      }
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = callApi
