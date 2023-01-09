// localStorage.setItem("hareket","pull");
// localStorage.setItem("hareket2",20);

// // const value=localStorage.getItem("hareket");
// // console.log(value);

// // localStorage.clear();
// console.log(localStorage.getItem("hareket"));

// if(localStorage.getItem("hareket")){
//     console.log("Sorgulama bulunuyor");
// }
// else{
//     console.log("sorgulamada bulunmuyor");
// }

// const todos=["Todo 1","Todo 2","Todo 3"];

// localStorage.clear();
// localStorage.setItem("todos",JSON.stringify(todos));
// const value=JSON.parse(localStorage.getItem("todos"));
// console.log(value);
localStorage.clear();
const form=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value=todoInput.value;
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));

    e.preventDefault();
}