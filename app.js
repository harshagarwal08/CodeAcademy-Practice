const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000
// create express app
const app = express()

// parse requests of content-type - application/json
app.use(bodyParser.json())

require('./routes.js')(app)

// listen for requests
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
