
// Tüm elementleri seçme
const form = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {//Tüm Event Listenerler
    form.addEventListener("submit", addTodo);//Submit yaptıktan sonra UI de Todo yu Gösterir
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);//Sayfa Yüklenince Storage den Todoları çeker
    secondCardBody.addEventListener("click", deleteTodo);//Todolar arasında tıklanan todo silme
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}
function clearAllTodos(e) {//Tüm Todo ları silme
    if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
        //Arayüzdeki tüm todoları kaldırma   
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);

        }
        localStorage.removeItem("todos");
    }
}

function filterTodos(e) {//Inputdan filtreleme
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            //BULAMADIğında -1 gönderiyor
            listItem.setAttribute("style", "display:none!important");
        } else {
            listItem.setAttribute("style", "display:block");

        }
    });
}
function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
function deleteTodo(e) {
    const selectedItem = e.target.parentElement.parentElement;
    if (e.target.className === "fa fa-remove") {
        selectedItem.remove();
        deleteTodoFromStorage(selectedItem.textContent);
        showAlert("success", selectedItem.textContent + " Başarıyla Silindi")
    }

}
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })

}
function addTodo(e) {//ToDo ları ekleme
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        showAlert("danger", "Lütfen Geçerli Bir Todo Girin !!");
    } else {
        if (isExist(newTodo)) {
            showAlert("warning", newTodo + " Zaten Listede Var");
            todoInput.value="";
        } else {
            addTodoToUI(newTodo);
            addTodoToStorage(newTodo);
            showAlert("success", newTodo + " Başarıyla Eklendi");
            // console.log(newTodo);            
        }
    }
    e.preventDefault();
}
function isExist(newTodo) {
    const listItems = document.querySelectorAll(".list-group-item");
    let flag = false;
    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text === newTodo) {
            flag = true;
        }
    });
    return flag;
}

function addTodoToUI(newTodo) {//Todoları ul ilst in altına gönderme

    //List Item Oluşturma
    const listItem = document.createElement("li");
    // Link Oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.id = "delete";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    //-----LİST ITEM OLUŞTU------

    //Sırada onu Ul list in altına eklemede
    todoList.appendChild(listItem);
    todoInput.value = "";
}
function getTodosFromStorage() {//Local Storage den todoları çekme
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}
function addTodoToStorage(newTodo) {//Yazılan todo yu storage ye ekleme
    let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function showAlert(type, message) {//Genel Alert oluşturma fonksiyonu

    //  <div class="alert alert-danger" role="alert">
    //   This is a danger alert—check it out!
    // </div> 
    //Yukarıda Bulunan Bootsrap Alertini oluşturacam

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    // console.log(firstCardBody);
    firstCardBody.appendChild(alert);

    // set Timeout methodu ile mesajı bekletebiliriz
    setTimeout(function () {
        alert.remove();
    }, 2000);
}

