let tasks=[]
let filter='all'
let edit=null
let currentEditText=""
function getEdit(){
    return edit
}
function changeEdit(id){
    edit=Number(id)===0?null:Number(id)
    tasks.forEach(task=>{
        if(task.id===edit){
            currentEditText=task.title
        }
    })
}
function getCurrentEdit(){
    return currentEditText
}
function editText(current){
    currentEditText=current
}
function cancelEdit(){
    currentEditText=""
    edit=null
}
function assignEdit(){
    const editId=getEdit()
    tasks=tasks.map(task=>{
        if(task.id===editId){
            return {id:task.id,title:currentEditText,status:task.status}
        }
        return task
    })
    edit=null
}
function currentFilter(){
    return filter
}
function changeFilter(type){
    if(type!='all'&&type!='completed'&&type!='pending'){
        throw new error('Invalid Filter')
    }
    filter=type
}
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
        if(task.id===Number(id))
        {
            return {id:Number(id),title:task.title,status:state}
        }
        return task
    })
}
export {getState,addTask,deleteTask,clearTask,toggleStatus,currentFilter,changeFilter,getEdit,changeEdit,editText,cancelEdit,assignEdit,getCurrentEdit}
