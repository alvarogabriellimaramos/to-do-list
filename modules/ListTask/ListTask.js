const {TableDataBase} = require('../../database/tables/tables.js')

async function ListTasks(){
    try{
        const Table = await TableDataBase('Tasks');
        const ListTask = await Table.findAll();
        if (ListTask.length === 0) return`Não existe nenhuma tarefa na sua lista de tarefas` 
        else{
            ListTask.forEach(task => console.log(task.dataValues))
        }
    }
    catch(erro){return `Erro ao lista tarefas ${erro}`}
}
module.exports = ListTasks