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
            return(`<li element-task-id="${task.id}"><input id="edit-input-field" type="text" value="${getCurrentEdit()}">
                    <button id="cancel-btn">Cancel</button><button id="save-btn">Save</button></li>`)
        }
        return( `<li element-task-id="${task.id}">Title:${task.title} Status:${task.status?'✅':'❌'}
                <button id="delete-btn">Delete</button><button id="edit-btn">Edit</button>
                <input type="checkbox" id="checkbox" ${task.status?'checked':''}></input></li>`) 
    }).join(' ')
}
export {display}