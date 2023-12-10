const {CreateTable} = require('../../database/tables/tables.js')
async function CompletTask(name){
    try{
        const Table = await CreateTable('Tasks');
        const [NumUpdate,updateRows] = await Table.update(
            {Concluida:true},{where:{Task:name}},{returning: true}
        )
        if (NumUpdate > 0) return `Tarefa concluida com sucesso`
        else{return `Erro ao concluir tarefa`}
    } 
    catch(erro){return `Erro ao concluir tarefa ${erro}`}
}
module.exports = CompletTask