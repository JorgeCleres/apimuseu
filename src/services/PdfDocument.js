const PDFDocument = require('pdfkit');
const fs = require('fs');
const Nodemailer = require('../services/Nodemailer')

exports.CreatePdf = async (mensagens, emailClient) => {

    try {
        const pdf = new PDFDocument();
        let arraymsg = []
        pdf.pipe(fs.createWriteStream('msg.pdf'))

        for(msg in mensagens) {
            arraymsg[msg] = mensagens[msg].message
        }

        pdf.list(arraymsg,{numbered: true})

        pdf.end();

        await Nodemailer.SendPdf(arraymsg, emailClient)
    } catch {
        console.log('erro ao gerar PDF2');
    }
}
