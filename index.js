const express = require('express')

const { port } = require('./config/environment')

const app = express()

app.listen(port, () => console.log(`Desserts are coming on port ${port}`))
