// const programmer = {
//     name: "Ömer Çetinadam",
//     age: 28,
//     email: "omer@gmail.com",
//     langs: ["Python", "Java", "Javascript"],

//     address: {
//         city: "İstanbul",
//         street: "Ümraniye"
//     },

//     work: function () {
//         console.log("Programcı Çalışıyor...")
//     }
// }
// value = programmer.name;
// console.log(value);
// value = programmer["email"];
// console.log(value);
// value = programmer.address.city;
// console.log(value);
// value = programmer.work();
// console.log(value);
// const programmers = [
//     {
//         name: "Ömer Çetinadam",
//         age:28,
//         email:"omer@hotmail.com"
//     },
//     {
//         name: "Yusuf Çetinadam",
//         age:22,
//         email:"yusuf@hotmail.com"
//     }
// ]
// value=programmers[0].name+"\t"+programmers[1].name;
// console.log(value);

// let value;

// const now=new Date();
// console.log(now);

// const date1=new Date("12-25-1993 02:15:20");
// const date2=new Date("September 19 1993");
// const date3=new Date("9/19/1993");

// value=date1;
// console.log(value);

// value=date1.getMonth();
// console.log(value);
// value=date1.getDate();
// console.log(value);
// value=date1.getDay();
// console.log(value);

// value=date1.getHours();
// console.log(value);
// value=date1.getMinutes();
// console.log(value);
// value=date1.getSeconds();
// console.log(value);
// value=date1.getMilliseconds();
// console.log(value);

// date1.setMonth(0);
// date1.setDate(2);
// date1.setFullYear(2001);


// date1.setHours(4);
// date1.setMinutes(5);
// date1.setSeconds(6);
// date1.setMilliseconds(7);
// value=date1;
// console.log(value);

// console.log(2==2);
// console.log("2"==2);
// // Hem değer hem tip kontrolü
// console.log("2"===2);
// console.log(2<=4);

// // Mantık operatörleri
// // NOT operatörü --> !
// // AND operatörü --> &&
// console.log(("Ahmet"=="Ahmet")&&(4==2));
// // OR operatörü--> ||
// console.log(("Ahmet"=="Ahmet")||(4==2));

// const error=false;
// if(error==true){
//     console.log("Hata Oluştu");
// }else{
//     console.log("Hata Oluşmadı");
// }
// Ternary Operator
// const number=100;
// console.log(number=== 100?"Sayı 100":"Sayı 100 Değil" );
// const process=1;
// switch(process){
//     case 1: console.log("İşlem 1");break;
//     case 2: console.log("İşlem 2");break;
//     case 3: console.log("İşlem 3");break;
//     case 4: console.log("İşlem 4");break;
//     default:console.log("Geçersiz İşlem");
// }

// function merhaba(name="Bilgi Yok", age="Bilgi yok") {
//     // if (typeof name === "undefined") name ="Bilgi yok!!!";

//     // if (typeof age === "undefined") age ="Bilgi yok!!!";

//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Ömer", 28);
// merhaba("Murat", 32);
// merhaba();
// merhaba("Kadir");

// function square(x) { return x * x; }
// function cube(x) { return x * x * x; }

// let b =square(12);
// console.log(b);
// let a=cube(b);
// console.log(a);

// const merhaba=function(name){
//     console.log("Merhaba "+name);
// }

// merhaba("Ömer");







// Immediately Invoked Function Expression(IIFE) TAnımlandığı yerde Çalışan Fonksiyon
(function(name){
    console.log("Merhaba "+name);
})("Ömer");

const database={
    host:"localhost",
    add:function(){
        console.log("Eklendi");
    },
    read:function(id){
        console.log(`ID: ${id} Okundu`)
    },
    update:function(id){
        console.log(`ID: ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`ID: ${id} Silindi`);
    }
}


console.log(database.host);
database.add();
database.update(10);
database.delete(20);


