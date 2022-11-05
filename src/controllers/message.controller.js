//const Message = require('../models/message.model')
//const PdfDocument = require('../services/PdfDocument')

exports.registerMessage = async(req, res) => {
    // try {
    //     let item = {
    //         message: req.body.mensagem
    //     }
    //     let saveMessage = await new Message(item)
    //     saveMessage.save()
    //     res.status(201).json({ message: 'Confirm criado com sucesso', saveMessage})
    // }
    // catch (err) {
    //     res.status(400).json({message: 'erro', err: err})
    //     console.log(err)
    // }
    res.status(200).send({
        success: true,
        message: 'register mesangem'
    })
}

exports.getMessages = async(req, res) => {
    // try {
    //     const messageRes = await Message.find({})
    //     res.status(200).json({ message: 'Messages', messageRes})
    // }
    // catch (err){
    //     res.status(400).json({message: 'erro', err})
    // }
    res.status(200).send({
        success: true,
        message: 'get mensagem'
    })
}

exports.emailMessage = async(req, res) => {
    // try {       
    //     let mensagens = await Message.find({})
    //     await PdfDocument.CreatePdf(mensagens, req.body.email)
    //     res.status(200).json({message: 'sucesso'})
    // } 
    // catch (err) {
    //     console.log('erro ao criar extract PDF ' + err);
    //     res.status(400).json({ message: 'erro', err})
    // }
    res.status(200).send({
        success: true,
        message: 'Email'
    })
}
