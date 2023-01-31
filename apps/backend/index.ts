const express = require('express')

export const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.use(express.json()); 
app.use(express.urlencoded());

// Export the Express API
module.exports = app