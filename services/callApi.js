const superagent = require('superagent')

function callApi (req) {
  console.log('>>> imcoming request:', req)
  return superagent(req.method, req.url)
    .send(req.body)
    .then(res => {
      return {
        statusCode: res.res.statusCode,
        statusMessage: res.res.statusMessage,
        headers: res.header,
        body: res.body,
        text: res.text
      }
    })
    .then(res => {
      console.log('<<< outgoing response:', res)
      return res
    })
}

module.exports = callApi
