//conexao com o banco de dados
const mongoose = require('mongoose')

const database = require('./dbConfig')

mongoose.Promise = global.Promise

//conexao com o banco de dados
mongoose.connect(database.local.localDatabaseUrl, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(()=> console.log('A base foi conectado com sucesso'))
    .catch((err) => {
        console.log(`erro ao conectar com o banco de dados ${err}`)
        process.exit()
})
