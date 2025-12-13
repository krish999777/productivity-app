import {display} from './render.js'
import {addTask,deleteTask,clearTask} from './state.js'
const body=document.querySelector('body')
body.addEventListener('click',(click)=>{
    console.log(click.target)
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

