const ConnectDataBase = require('../index');
const Sequelize = require('sequelize');
async function TableDataBase(name){
    const TABLE = await ConnectDataBase('sistema','root','erineide');
    const task = await TABLE.define(name,{
        Task:{type:Sequelize.STRING},
        Date:{type:Sequelize.DATE},
        Description:{type:Sequelize.TEXT},
        Concluida:{type:Sequelize.BOOLEAN}
    })
    return task
}

async function CreateTable(name){
    try{
        const table = await TableDataBase("Tasks");
        return table 
    }
    catch{
       const table = await TableDataBase('Tasks');
       await table.sync()
       return table 
    }
}
module.exports = {CreateTable,TableDataBase}