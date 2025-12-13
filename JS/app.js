import {display} from './render.js'
import {getState,addTask,deleteTask,clearTask,toggleStatus,currentFilter,changeFilter} from './state.js'
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
