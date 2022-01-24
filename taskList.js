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

/**
 * Generate a new ID
 * @returns {number}
 */
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

/**
 * Addes a new task to the list
 * @param {string} taskName - Name of the task to be added
 */
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

/**
 * Deletes the object whose id match the taskId
 * @param {number} taskId - Id of the task object
 */
function deleteTask(taskId){
    tasks = tasks.filter((task)=>{
        if(task.id != taskId){
            return task;
        }
    });
}

/**
 * Set the item's complete status as true
 * @param {number} taskId - Id of the task object
 */
function completeTask(taskId){
    tasks = tasks.map(task=>{
        if(task.id == taskId){
            task.completed = true;
        }
        return task;
    });
}