// console.log(this);

// const emp1 = {
//     name: "ömer",
//     age: 28,
//     showInfos: function () {
//         console.log("Bilgiler Gösteriliyor..");
//     }
// }
// const emp2 = {
//     name: "yusuf",
//     age: 25
// }
// emp1.salary = 25000;
// console.log(emp1);


// function Employee(name, age, salary) {//Constractor function
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.showInfos = function () {
//         console.log(this.name, this.age, this.salary);
//     }

// }
// const emp1 = new Employee("Mustafa", 22, 5000);
// const emp2 = new Employee("ömer", 28, 25000);
// const employees = [emp1, emp2];
// emp1.showInfos();
// emp2.showInfos();
// console.log(emp1);
// console.log(emp2);
// for (const key of employees) {
//     key.showInfos();
// }


// OBJECT PROTOTYPE

// const object=new Object();
// const object2=new Object();
// object.name="Ömer";
// console.log(object);

// function Employee(name, age) {//Constractor function
//     this.name = name;
//     this.age = age;
// }
// Employee.prototype.showInfo = function () {

//     console.log(this.name, this.age);

// }
// const emp1 = new Employee("Mustafa", 22);
// const emp2 = new Employee("Ömer", 25);
// // console.log(emp1);
// // console.log(emp2);

// emp1.showInfo();
// emp2.showInfo();
// const obj={
//     test1:function(){
//         console.log("Test1");
//     },
//     test2:function(){
//         console.log("Test2");
//     }
// }
// const emp=Object.create(obj);
// emp.name="Ömer";
// emp.age=28;
// console.log(emp);
// function Person() {

// }
// Person.prototype.test1 = function () { console.log("test1"); }
// Person.prototype.test2 = function () { console.log("test2"); }
// const person = new Person();
// console.log(person);

// function Employee(name, age) {//Constractor function
//     this.name = name;
//     this.age = age;
// }
// Employee.prototype=Object.create(Person.prototype);
// const emp1=new Employee("Ömer",29);
// emp1.test1();
// Employee.prototype.mytest=function(){
//     console.log("My Test Prototype");
// }
// console.log(emp1);


// // CALL APPLY BİND

// const obj1={
//     number1:10,
//     number2:20
// }

// const obj2={
//     number1:30,
//     number2:40
// }
// function addNum(num3,num4){
//     console.log(this.number1+this.number2+num3+num4);
// }

// // addNum(100,200);
// addNum.call(obj1,100,300);
// addNum.call(obj2,100,300);

// addNum.apply(obj1,[100,200]);

// //BIND
//  function getNumTotal(num3,num4){
//     return this.number1+this.number2+num3+num4;
//  }
// const copyFunc1=getNumTotal.bind(obj1);
// const copyFunc2=getNumTotal.bind(obj2);
// console.log(copyFunc1(100,200));
// console.log(copyFunc2(200,300));

function Person(name, age) {//Constractor function
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos=function(){
    console.log("İsim : "+this.name+" Yaş : "+this.age);
}
function Employee(name, age, salary) {//Constractor function
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}
Employee.prototype=Object.create(Person.prototype);
Employee.prototype.toString=function(){
    console.log("Employee");
}
Employee.prototype.showInfos=function(){
    console.log("İsim : "+this.name+" Yaş : "+this.age+" Maaş : "+this.salary);
}
const emp=new Employee("Ömer",25,25000);
// console.log(emp);
emp.showInfos();
emp.toString();

