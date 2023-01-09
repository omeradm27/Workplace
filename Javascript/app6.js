//KLAVYE MOUSE EVENTLERİ

// Klavye Eventleri
//keypress
// document.addEventListener("keypress",run);
// function run(e){
//     // console.log(e.which);
//     // console.log("Naber");
//     console.log(e.key);
// }
//keydown
// document.addEventListener("keydown",run);
// function run(e){
//     // console.log(e.which);
//     // console.log("Naber");
//     console.log(e.key);
// }
//keyup
// document.addEventListener("keyup",run);
// function run(e){
//     // console.log(e.which);
//     // console.log("Naber");
//     console.log(e.key);
// }

// const header = document.querySelector(".card-header");
// const todoInput = document.querySelector("#todo");

// todoInput.addEventListener("keyup", changeText);

// function changeText(e) {
//     console.log(e.key.value);
//     header.textContent=e.target.value;
// }

// const cardBody = document.querySelectorAll(".card-body")[1];
// const title = document.querySelector("#tasks-title");

// CLİCK EVENTLER
// title.addEventListener("click",run);
// title.addEventListener("click", run);
// function run(e) {
//     console.log(e.type);
// }
// console.log(title);

// DOUBLE CLİCK
// title.addEventListener("dblclick", run2);
// function run2(e) {
//     console.log("Çift Tık");
// }

// MOUSE DOWN
// title.addEventListener("mousedown", run3);
// function run3(e) {
//     console.log("MouseDown");
// }
// MOUSE UP
// title.addEventListener("mouseup", run3);
// function run3(e) {
//     console.log("MOUSEUPP");
// }
// MOUSE OVER
// title.addEventListener("mouseover", run3);
// function run3(e) {
//     console.log("MOUSEOVER");
// }
// MOUSE OUT
// title.addEventListener("mouseout", run3);
// function run3(e) {
//     console.log("MOUSEOUT");
// }

// cardBody.addEventListener("mouseover", run);
// cardBody.addEventListener("mouseout", run);
// function run(e) {
//     console.log(e.type);
// }
// MOUSE ENTER
// MOUSE LEAVE
// cardBody.addEventListener("mouseenter", run);
// cardBody.addEventListener("mouseleave", run);
// function run(e) {
//     console.log(e.type);
// }

// const filter=document.getElementById("filter");
// document.addEventListener("DOMContentLoaded",load);
// function load(e){
//     console.log("Sayfa Yüklendi");
// }

// FOCUS
// filter.addEventListener("focus",run);
// filter.addEventListener("blur",run);
//  filter.addEventListener("paste",run);
//  filter.addEventListener("copy",run);
//  filter.addEventListener("cut",run);
//  filter.addEventListener("select",run);

// function run(e){
//     console.log(e.type);
// }

// console.log(filter);


// EVENT BUBBLING
// document.querySelector(".container").addEventListener("click", function () {
//     console.log("Div Container");
// });
// document.querySelector(".card.row").addEventListener("click", function () {
//     console.log("Card Row");
// });
// document.querySelectorAll(".card-body")[1].addEventListener("click", function () {
//     console.log("Card Body");
// });

// EVENT CAPTURING AND DELEGATION

const cardBody=document.querySelectorAll(".card-body")[1];
const cardBody1=document.querySelectorAll(".card-body")[0];
cardBody.addEventListener("click",run);
cardBody1.addEventListener("click",run1);

function run(e){
    // const temp=e.target.parentElement.parentElement;
    if(e.target.className==="fa fa-remove"){
        // temp.remove();
        console.log("Silme İşlemi");
    }if (e.target.id==="filter") {
        console.log("Filtreleme İşlemi");
        
    }if (e.target.id==="clear-todos") {
        console.log("Tüm Taskları Silme İşlemi");
    }
    // console.log(temp);
}
function run1(e){
    // const temp=e.target.parentElement.parentElement;
    if(e.target.className==="btn btn-danger"){
        // temp.remove();
        console.log("TODO Ekleme İşlemi");
    }if (e.target.id==="todo") {
        console.log("Input Ekleme Yeri");
        
    }
    // console.log(temp);
}