const express = require('express')
const cors = require('cors')
const mongooConnection = require('./config/mongooConnectionConfig')

const app = express()

const message = require('./routes/messageRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json'}))
app.use(cors())

//.set =  usao para incluir algum arquivo estático, nesse caso está incluindo a conecão com o banco
app.set('mongoose connection', mongooConnection)
app.use('', message)

module.exports = app