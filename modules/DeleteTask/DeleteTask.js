const {CreateTable} = require('../../database/tables/tables.js');
async function DeleteTask(name){
    try{
        const TABLE = await CreateTable('Tasks')
        const TaskDelete = await TABLE.destroy({
            where:{Task:name}
        })
        if (TaskDelete > 0) return `Tarefa deletada com sucesso`
        else{return `Erro ao deletar tarefa`}
    }
    catch(erro){return `Erro ao excluir task ${erro} `}
}
module.exports = DeleteTask