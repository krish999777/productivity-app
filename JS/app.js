const allBtn=document.getElementById('all-btn')
const completedBtn=document.getElementById('completed-btn')
const pendingBtn=document.getElementById('pending-btn')
allBtn.addEventListener('click',function(){
    changeFilter('all')
    display()
})
completedBtn.addEventListener('click',function(){
    changeFilter('completed')
    display()
})
pendingBtn.addEventListener('click',function(){
    changeFilter('pending')
    display()
})
const container=document.querySelector('#tasks')
container.addEventListener('click',(click)=>{
    if(click.target.id==='delete-btn'){
        deleteTask(click.target.parentElement.parentElement.getAttribute('element-task-id'))
        display()
    }else if(click.target.id==='edit-btn'){
        changeEdit(click.target.parentElement.parentElement.getAttribute('element-task-id'))
        display()
    }else if(click.target.id==='cancel-btn'){
        cancelEdit()
        display()
    }else if(click.target.id==='save-btn'){
        assignEdit()
        display()
    }else if(click.target.id==='checkbox'){
        const clickedId=click.target.parentElement.parentElement.getAttribute('element-task-id')
        const checkboxStatus=click.target.checked
        toggleStatus(clickedId,checkboxStatus)
        display()
    }
})
container.addEventListener('input',(event)=>{
    if(event.target.id==='edit-input-field'){
        editText(event.target.value)
    }
})
const submitBtn=document.getElementById('add-task')
const inputField=document.getElementById('input-field')
let count=1
submitBtn.addEventListener('click',()=>{
    if(inputField.value=="")
        return
    addTask(count,inputField.value,false)
    display()
    count++
    inputField.value=""
})
const listEl=document.getElementById('tasks')
function display(){
    let tasks=[]
    const unfiltered=getState()
    const filter=currentFilter()
    const editId=getEdit()
    if(filter=='all'){
        tasks=unfiltered
    }
    else if(filter=='completed')
        tasks= unfiltered.filter(task=>task.status)
    else
        tasks= unfiltered.filter(task=>!task.status)
    listEl.innerHTML=tasks.map(task=>{
        if(task.id===editId){
            return(`<li element-task-id="${task.id}"><input class="edit-input"id="edit-input-field" type="text" value="${getCurrentEdit()}">
                    <div class="tasks-buttons"><button class="delete" id="cancel-btn">Cancel</button><button class="save" id="save-btn">Save</button></div>
                    </li>`)
        }
        return( `<li element-task-id="${task.id}"><div class="title-check"><div class="task-title">${task.title}</div>
                <input class="tasks-checkbox" type="checkbox" id="checkbox" ${task.status?'checked':''}></input></div>
                <div class="task-status">Status:${task.status?'✅':'❌'}</div>
                <div class="tasks-buttons"><button class="delete" id="delete-btn">Delete</button><button class="edit" id="edit-btn">Edit</button></div>
                </li>`) 
    }).join(' ')
}
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
