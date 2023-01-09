// alert("java hoşgeldniniz")
// console.log("Merhaba Javascript");
//  var a=20;
//  console.log(a);

//  console.warn("Bu bir uyarıdır");
//  console.error("Sayfa Bulunamadı");
//  a=null;
// var a;
//  console.log(a);
//  console.log(typeof(a));

//  var person={
//     name: "Ömer",
//     age:25
//  }
// console.log(person);
// console.log(typeof(person));

// var date=new Date();
//  console.log(date);
//  console.log(typeof(date));

//   var merhaba=function () {
//     console.log("merhaba");
//   }

//   console.log(merhaba);
//   console.log(typeof(merhaba));

// var a=[1,2,3];
// var a=10;
// console.log(a);
// var b=a;

// a.push(4);
// console.log(b);

// LET DEĞİŞKENi ==> Tekrar var gibi declare etmeye gerek yok

// let name = "ömer";
// console.log(name);

// name = "çeto";
// console.log(name);

// CONST DEĞİŞKENi ==> Declare ettiğimiz yerde değer de vermemiz 
// gerkiyor sonradan define yapılmıyor ve değişmiyor
// const a = 5;
// console.log(a);
// a = 10;
// ==> a nın değişkeni yeri değişemez

// const b=[1,2,3,4,5];

// b.push(8);
// console.log(b);


// let value;

// value=(10).toString();
// console.log(value);
// console.log(typeof(value));

// value=(3.14).toString();
// console.log(value);
// console.log(typeof(value));

// value=String(123);
// console.log(value);
// console.log(typeof(value));

// value=String(3.14);
// console.log(value);
// console.log(typeof(value));

// value=String(true);
// console.log(value);
// console.log(typeof(value));

// value=Number("12");
// console.log(value);
// console.log(typeof(value));

// value=Number(null);
// console.log(value);
// console.log(typeof(value));

// value=Number(undefined);
// console.log(value);
// console.log(typeof(value));

// value=Number("Merhaba");
// console.log(value);
// console.log(typeof(value));

// value=parseFloat("3.14");
// console.log(value);
// console.log(typeof(value));

// value=parseInt("3.14");
// console.log(value);
// console.log(typeof(value));

// const a="Hello"+34;
// console.log(a);
// console.log(typeof(a));

// const a="12"+34;
// console.log(a);
// console.log(typeof(a));

// const a=Number("12")+34;
// console.log(a);
// console.log(typeof(a));

// let value;
// const value1 = 10;
// const value2 = 2;

// value = value1 + value2;
// console.log(value);

// value = value1 - value2;
// console.log(value);

// value = value1 % value2;
// console.log(value);

// value = value1 * value2;
// console.log(value);

// value = value1 / value2;
// console.log(value);

// let value;

// value = Math.round(3, 7);
// console.log(value);
// console.log(typeof(value));

// value=Math.round(3,5);
// console.log(value);

// value=Math.round(3,2);
// console.log(value);



// value=Math.ceil(3,7);
// console.log(value);

// value=Math.ceil(3,5);
// console.log(value);

// value=Math.ceil(3,2);
// console.log(value);



// value=Math.floor(3,9);
// console.log(value);

// value=Math.floor(3,5);
// console.log(value);

// value=Math.floor(3,2);
// console.log(value);

// value=Math.sqrt(64);
// console.log(value);

// value=Math.pow(8,3);
// console.log(value);

// value=Math.abs(8,3);
// console.log(value);

// value=Math.random()*20;
// console.log(value);

// value=Math.floor(Math.random()*20);
// console.log(value);

// const firstName = "Ömer";
// const lastName = "Çetinadam";
// const langs = "Java,Python,C++";
// value=firstName+" "+lastName;
// console.log(value);

// value=firstName.length;
// console.log(value);

// value=firstName.concat(" ","Caz");
// console.log(value);

// value=firstName[2];
// console.log(value);

// value=firstName[firstName.length-1];
// console.log(value);

// //İndexOF
// value=firstName.indexOf("Ö");
// console.log(value);

// value=firstName.toUpperCase();
// console.log(value);

// value=firstName.toLowerCase();
// console.log(value);

// value=firstName.charAt(2);
// console.log(value);

// //Split

// value=langs.split(",");
// console.log(value);
// //REPLACE
// value=langs.replace("Python",2);
// console.log(value);

// //NCLUDES
// value=langs.includes("Java");
// console.log(value);

// value=langs.includes("Jasdkjfs");
// console.log(value);


// const name = "Ömer Çetinadam";
// const depart = "Software";
// const salary = "10000";

// const a = "İsim : " + name + "\nDepartment : " + depart + "\nSalary : " + salary;

// console.log(a);

// const b = `İsim : ${name}\nDepartment : ${depart} \nSalary : ${salary}`;
// console.log(b);

// const html =
//     "<ul>"
//     + "<li>" + name + "</li>" +
//     +"<li>" + depart + "</li>" +
//     +"<li>" + salary + "</li>" +
//     "</ul>";
// document.body.innerHTML = html;
// function x() {
//     return "Merhaba";
// }
// const html =
//     ` 
// <ul>
//     <li>${name}</li>
//     <li>${depart}</li>
//     <li>${salary}</li>
//     <li>${10 / 4}</li>
//     <li>${x()}</li>
// </ul>
// `;

// document.body.innerHTML = html;

// let value;
// const numbers=[12,23,23,34,54,65,56,]

// numbers[2]=1000;
// console.log(numbers[2]);
// // array de istenen değerin indexini belirleme
// value=numbers.indexOf(54);
// console.log(value);
// // arrayin sonuna değer ekleme
// numbers.push(2000);
// console.log(numbers);
// // arrayin başına değer ekleme
// numbers.unshift(250);
// console.log(numbers);
// // araayda sonundan değer silme
// numbers.pop();
// console.log(numbers);
// // arrayin başından değer silme
// numbers.shift();
// console.log(numbers);
// // arrayin belirtilen indexten başlayarak kaç eleman sileceğin ister
// numbers.splice(3,2);
// console.log(numbers);
// // Arrayi terse çevirme
// numbers.reverse();
// console.log(numbers);
// //Sort işlemi
// // aşağdaki kod sadece en soldaki basamağa göre sort yapıyor
// value=numbers.sort();
// console.log(value);
// // Küçükten Büyüğe doğru sıralama
// value=numbers.sort(function(x,y){
//     return x-y;
// })
// // Büyükten küçüğe  doğru sıralam
// console.log(value);

// value=numbers.sort(function(x,y){
//     return y-x;
// })
// console.log(value);



