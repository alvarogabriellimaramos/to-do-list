const {CreateTable,TableDataBase} = require('../../database/tables/tables.js');
const CreateTask = require('../createTask/createTask.js')
async function AddTask(task,description){
    try{
        const Table = await CreateTable('Tasks');
        const {Task,Date,Description,Concluida} = CreateTask(task,description)
        if (Task === '' || Task === undefined) return `Erro ao adicionar tarefa`
        else{ 
            const TaskExists = await Table.findOne({
                where:{Task:task}
            })
            if (TaskExists) return `Essa tarefa já existe no banco de dados`
            else{
                Table.create({Task,Date,Description,Concluida}) 
                return 'Tarefa adicionada com sucesso'
            }
        }
    }
    catch(erro){return `Erro ao adiciona tarefa ${erro}`}
}
module.exports = AddTask