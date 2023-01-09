// // class Employee {
// //     constructor(name, age, salary) {
// //         this.name = name;
// //         this.age = age;
// //         this.salary = salary;
// //     }
// //     showInfos(){
// //         console.log("İsim : "+this.name+" Yaş : "+this.age+" Maaş : "+this.salary);
// //     }
// // }

// // const emp=new Employee("Ömer",25,5000);

// // emp.showInfos();

// // class Matematik{
// //     cube(x){
// //         console.log(x*x*x);
// //     }
// // }
// // const math=new Matematik();
// // math.cube(3);
// // console.log(math);

// class Matematik{
//     sqr(x){
//         console.log(x*x);
//     }
//     static cube(x){
//         console.log(x*x*x);
//     }
// }
// Matematik.cube(4);
// const math=new Matematik();
// math.sqr(3);
// // math.cube(4); Kullanamadık çünkü statik


class Person {//SuperClass,BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim : "+this.name+" Yaş : "+this.age+" Maaş : "+this.salary);
    }
    
}
class Employee extends Person{//SubClass,DerivedClass
    constructor(name, age,salary) {
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary=salary;
    }
    toString(){//Overriding
        console.log("Employee");
    }
    raiseSalary(amount){//Overriding
        this.salary+=amount;
    }
}
const emp=new Employee("Ömer",23,3444);
emp.showInfos();
emp.toString();
emp.raiseSalary(emp.salary);
emp.showInfos();