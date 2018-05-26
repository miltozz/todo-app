const addTasks = document.querySelector('.add-tasks');
const tasksList = document.querySelector('.tasks');
const tasks = [];


function addTask(e){
    e.preventDefault();
    console.log(e.target);
    const taskText = this.querySelector('[type=text]').value;
    console.log(taskText);
    const task = {
        text:taskText,
        done:false
    };
    console.log(task);

    tasks.push(task);
    console.log(tasks);
    this.reset();
    
    
    

    
}

addTasks.addEventListener('submit', addTask);