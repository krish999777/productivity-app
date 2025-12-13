import {display} from './render.js'
import {getState,addTask,deleteTask,clearTask,toggleStatus} from './state.js'
const container=document.querySelector('#tasks')
container.addEventListener('click',(click)=>{
    if(click.target.id==='delete-btn'){
        deleteTask(click.target.parentElement.getAttribute('element-task-id'))
        display()
    }else if(click.target.id==='checkbox'){
        const clickedId=click.target.parentElement.getAttribute('element-task-id')
        const checkboxStatus=click.target.checked
        toggleStatus(clickedId,checkboxStatus)
        display()
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

