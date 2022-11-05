const Nodemailer = require('nodemailer');
exports.SendEmail = async(nome, email, mensagem) =>  {
    try {
        let remetente = Nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465,
            secure: true,
            auth: {
                user: 'jorge@empiric.com.br',
                pass: 'Senha321#'
            },
            tls: { rejectUnauthorized: false }
        })

        let message = {
            from: 'jorge@empiric.com.br',
            to: 'jorge@empiric.com.br',
            subject: nome,
            text: `Email: ${email}, Mensagem: ${mensagem}`,
        }

        remetente.sendMail(message, (err) => {
            if(err) {
                console.log('erro ao enviar email ', err)
            } else {
                console.log('Email enviado com sucesso')
            }
        })
    }
    catch {
        console.log('erro ao enviar email')
    }
}

exports.SendPdf = async(arraymsg, emailClient) => {
    console.log(arraymsg);
    console.log(emailClient);

    try {
        let remetente = Nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465,
            secure: true,
            auth: {
                user: 'jorge@empiric.com.br',
                pass: 'Senha321#'
            },
            tls: { rejectUnauthorized: false }
        })

        var arrayItems = "";
        var n;
        for (n in arraymsg) {
          arrayItems += "<li>" + arraymsg[n].message + "</li>";
        }

        let message = {
            from: 'jorge@empiric.com.br',
            to: emailClient,
            subject: 'Lista de confirmados',
            html: `<h2>Lista de Mensagens,</h2>
                    <ul>${arrayItems},</ul>`
        }

        remetente.sendMail(message, (err) => {
            if(err) {
                console.log('erro ao enviar email ', err)
            } else {
                console.log('Email enviado com sucesso')
            }
        })
    }
    catch(error) {
        console.log('erro ao enviar email', error)
    }
}