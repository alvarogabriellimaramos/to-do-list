function CreateTask(Task,Description){
    return{
        Task,
        Date: new Date().toLocaleDateString(),
        Description,
        Concluida:false
    }
}
module.exports = CreateTask