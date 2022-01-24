let tasks = [
    {
        id: 0,
        name: "Do Homework",
        completed: false,
    },
    {
        id: 1,
        name: "Call Sammy to fix the sink",
        completed: false,
    },
]

function generateIDForTasks(){
    let numGen = true;
    let idNum;
    while(numGen){
        idNum = Math.floor(Math.random()* 1000);
        numGen = false;

        tasks.forEach(task => {
            if(task.id == idNum){
                numGen = true;
            }
        });
    }
    return idNum;
}

function addTask(taskName){
    if(taskName != ''){
        let id = generateIDForTasks();
        let newTasks = {
            id: id,
            name: taskName,
            completed: false,
        };
        tasks = [ ...tasks, newTasks ];
    }
}

function deleteTask(taskId){
    tasks = tasks.filter((task)=>{
        if(task.id != taskId){
            return task;
        }
    });
}

function completeTask(taskId){
    tasks = tasks.map(task=>{
        if(task.id == taskId){
            task.completed = true;
        }
        return task;
    });
}