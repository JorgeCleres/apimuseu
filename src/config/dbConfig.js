//pega o caminho do banco de dados MONGODB no .env
const dotenv = require('dotenv')

dotenv.config()
//console.log(process.env)

module.exports = {
    local: {
        localDatabaseUrl: process.env.DB_URI,
        secret: 'password'
    }
}
