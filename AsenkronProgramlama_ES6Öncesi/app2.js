// //Set Timeout
// setTimeout(function() {
//     console.log("Naber");
// },5000)

// let i = 0;

// let value=setInterval(function () {
//     i++;
//     console.log("Sayı : "+i);
// }, 1000);
// document.getElementById("btn").addEventListener("click",function(){
//     clearInterval(value);

// });


// // Asenkron İşlemi Senkron yapma
// function process1(callback) {
//     setTimeout(function () {
//         console.log("Process 1");
//         callback();
//     }, 3000);
// }
// function process2() {
//     setTimeout(function () {
//         console.log("Process 2");
//     }, 2000);
// }
// process1(process2);
// // process2();
// console.log("naber");
 
const person={
    age:25,
    // tellAge:function(){
    //     //this-Person
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)
    tellAge:()=>{
        console.log(this);
        console.log(this.age);
    }

    //this-Window
}
person.tellAge();