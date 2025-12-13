import {getState,currentFilter} from './state.js'
const listEl=document.getElementById('tasks')
function display(){
    let tasks=[]
    const unfiltered=getState()
    const filter=currentFilter()
    if(filter=='all'){
        tasks=unfiltered
    }
    else if(filter=='completed')
        tasks= unfiltered.filter(task=>task.status)
    else
        tasks= unfiltered.filter(task=>!task.status)
    listEl.innerHTML=tasks.map(task=>{
    return ( `  <li element-task-id="${task.id}">Title:${task.title} Status:${task.status?'✅':'❌'}
                <button id="delete-btn">Delete</button>
                <input type="checkbox" id="checkbox" ${task.status?'checked':''}></input></li>`) 
        }).join(' ')
}
export {display}