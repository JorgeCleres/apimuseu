const express = require('express')
const router = express.Router()
//const messageController = require('../controllers/message.controller')

// router.post('/message', messageController.registerMessage)

// router.post('/sendemail', messageController.emailMessage)

// router.get('/getmessage', messageController.getMessages)

router.get('/message', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'usando routes msg'
    })
})

module.exports = router