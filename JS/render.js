import {getState} from './state.js'
const listEl=document.getElementById('tasks')
function display(){
    const tasks=getState()
    listEl.innerHTML=tasks.map(task=>{
        return ( `  <li element-task-id="${task.id}">Title:${task.title} Status:${task.status?'✅':'❌'}
                    <button id="delete-btn">Delete</button>
                    <input type="checkbox" id="checkbox" ${task.status?'checked':''}></input></li>`) 
    }).join(' ')
}
export {display}