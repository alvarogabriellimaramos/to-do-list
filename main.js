const rl = require('readline');
const AddTask = require("./modules/AddTask/AddTask.js")
const DeleteTask = require('./modules/DeleteTask/DeleteTask.js');
const CompletTask = require('./modules/CompleteTask/CompleteTask.js')
const ListTasks = require('./modules/ListTask/ListTask.js');
const terminal = rl.createInterface({
    input:process.stdin,
    output:process.stdout
})
async function Option(option){
    switch(option){
        case '1':{
            terminal.question('Digite o nome da tarefa - ',name => {
                terminal.question('Digite a descrição da tarefa - ',async descrição => {
                    const task = await AddTask(name,descrição)
                    console.log(task)
                    setTimeout(Main,1500)
                })
            })
            break
        }
        case '2':{
            terminal.question('Digite o nome da tarefa - ',async name => {
                const task = await DeleteTask(name);
                console.log(task);
               setTimeout(Main,1500);
            });
            break
        };
        case '3':{
            console.log(await ListTasks());
            setTimeout(Main,1500);
            break
        }
        case '4':{
            terminal.question('Digite o nome da tarefa - ',async name => {
                console.log(await CompletTask(name))
                setTimeout(Main,1500);
            })
            break
        }
        case '5':{
            console.log('Encerrado programa...')
            setTimeout(() => {
                console.log('Até a proxima')
                terminal.close()
            }, 2000);
            break
        }
        default:{
            console.log('Opção invalida,tente novamente')
            Main()
        }
    };
}

function Main(){
    console.log(`
 1 - Adicionar Tarefa
 2 - Deletar Tarefa
 3 - Lista Tarefa
 4 - Concluir Tarefa 
 5 - Sair do Programa  
    `)
    terminal.question('Digite uma opção - ',async option => {
        await Option(option)
    })
}
Main()