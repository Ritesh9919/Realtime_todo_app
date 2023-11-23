// Socket code in js

const socket = io.connect('http://localhost:3000');


const todoList = document.getElementById('todo-list');
const todoBtn = document.getElementById('todo-btn');
const todoInput = document.getElementById('todo-input');
const updateBtn = document.getElementsByClassName('updateButton');
console.log(updateBtn);


   for(let i=0;i < updateBtn.length; i++) {
    updateBtn[i].addEventListener('click', ()=> {
        console.log('clicked');
    })
   }


todoBtn.addEventListener('click', ()=> {
    const todo = todoInput.value;
    if(todo) {
        socket.emit('addTodo', todo);
    }
    const todoElement = document.createElement('div');
    todoElement.innerText = todo;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'deleteButton';
    const updateButton = document.createElement('button');
    updateButton.innerText = 'Update';
    updateButton.className = 'updateButton';
    todoList.appendChild(todoElement);
    todoElement.appendChild(deleteButton);
    todoElement.appendChild(updateButton);
    todoInput.value = "";
    
})



socket.on('broadcast_todo', (todo)=> {
    const element = document.createElement('div');
    element.innerText =todo;
    todoList.appendChild(element);
})