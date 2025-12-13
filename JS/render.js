import {getState} from './state.js'
const container=document.getElementById('tasks')
function display(){
    const tasks=getState()
    container.innerHTML=tasks.map(task=>{
        return ( `<li element-task-id="${task.id}">Title:${task.title} Status:${task.completed?'Completed':'Not Completed'}</li>
                    <button id="delete-btn">Delete</button>
                    <input type="checkbox" id="checkbox"></input>`)
    }).join(' ')
}
export {display}