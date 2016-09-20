var express = require('express')
var cors = require('cors')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static('public'))
app.use(cors())
app.post('/koy', (req, res) => {
  console.log(req)
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
