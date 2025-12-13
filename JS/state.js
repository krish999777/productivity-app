let tasks=[]
function getState(){
    return [...tasks]
}
function addTask(id,title,status){
    tasks=[...tasks,{id,title,completed:status}]
}
function deleteTask(taskId){
    tasks=tasks.filter(obj=>obj.id!=taskId)
}
function clearTask(){
    tasks=[]
    
}

export {getState,addTask,deleteTask,clearTask}
