let tasks=[]
function getState(){
    return [...tasks]
}
function addTask(id,title,status){
    tasks=[...tasks,{id,title,status}]
}
function deleteTask(taskId){
    tasks=tasks.filter(obj=>obj.id!=taskId)
}
function clearTask(){
    tasks=[]
}
function toggleStatus(id,state){
    tasks=tasks.map((task)=>{
        if(task.id==id)
        {
            return {id:id,title:task.title,status:state}
        }
        return task
    })
}

export {getState,addTask,deleteTask,clearTask,toggleStatus}
