const express = require('express')
const router = express.Router()
const messageController = require('../controller/messageController')

router.post('/message', messageController.registerMessage)

router.post('/sendemail', messageController.emailMessage)

router.get('/getmessage', messageController.getMessages)

module.exports = router