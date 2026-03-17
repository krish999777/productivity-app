import {getState,currentFilter,getEdit,getCurrentEdit} from './state.js'
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
export {display}