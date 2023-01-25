const express = require('express')
const PORT = 3000
// create express app
const app = express()

// parse requests of content-type - application/json
app.use(express.json())

require('./routes.js')(app)

// listen for requests
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
