const superagent = require('superagent')

function callApi (req) {
  console.log('>>> imcoming request:', req)
  return superagent(req.method, req.url)
    .send(req.body)
    .then(res => {
      console.log('<<< outgoing response:', res)
      return {
        statusCode: res.statusCode,
        statusText: res.statusText,
        headers: res.header,
        body: res.body,
        text: res.text
      }
    })
}

module.exports = callApi
