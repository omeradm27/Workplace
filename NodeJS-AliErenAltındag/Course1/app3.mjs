// var data=require("./users/userData.js")
// console.log(data);
// // ES hızlı asenkron belli kısmı içe aktarılabilir
// // ES commonjs i kapsıyor
// var fs=require("fs");

// import {time,userData} from "./users/userData.mjs"
// console.log(userData,time);
// import *as data from "./users/userData.mjs";
// import { data1 as a,data2 as b,data3 as c,data4 as d} from "./users/userData.mjs";
// console.log(data.printName());
// console.log(a,b,c,d);

// var a=5;
// if(a==5){
//     var response=await import("./users/userData.mjs");
//     console.log(response);
// }

// NODEJS in MANTIĞINDA EVENTHANDLER TABANLI OLMASI NOEJS İN Olayı


import { EventEmitter } from "events";

var emitter=new EventEmitter();
function clicked(){
    console.log("Clicked!!");
}

emitter.addListener("click",clicked);//event-handler eventlistener
emitter.on("click",clicked)

emitter.once("tek",()=>console.log("Tek Çağrıldı"))
// setInterval(() => {
//     emitter.emit("click")
// }, 1000);
// emitter.emit("click",3,5)
console.log(emitter.eventNames());
