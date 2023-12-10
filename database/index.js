const Sequelize = require('sequelize');

async function ConnectDataBase(name,username,password){
    try{
        const sequelize = new Sequelize(name,username,password,{
            host: 'localhost',
            dialect: 'mysql'
        })
        return sequelize
    }
    catch(erro){return `Erro ao se conecta ao banco de dados ${erro}`}
}

module.exports = ConnectDataBase