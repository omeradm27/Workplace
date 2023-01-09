// const merhaba=function(){
//     console.log("merhaba");
// }
// merhaba();

//ARROW FUNCTİON
// const merhaba=(firstName)=>{
//     console.log("merhaba",firstName);
// }
// merhaba("Ahmet");

// const cube=function(x){
//     return x*x*x;
// };
// const cube =x => x * x * x;
// console.log(cube(4));

//DESTRUCTING FUNCTION
// // let num1,num2;
// arr =[100,200,300,400];

// let[num1,num2]=arr;
// console.log(num1,num2)

//Object Destruction

// const getLangs=()=> ["C","Java","Python"];

// const [lang1,lang2,lang3]=getLangs();
// console.log(lang1,lang2,lang3);

// const person = {name: "Ömer",
//     year: 1993,
//     name: 3000,
//     showInfos: () => console.log("Bilgiler gösteriliyor...")
// };
// const { 
//     name: isim,
//     year: yil,
//     salary: maas,
//     showInfos: bilgilerigoster
// }=person;
// console.log(isim,yil,maas);
// bilgilerigoster();

//SPREAD OPERATÖRÜ
// const langs=["C","Java","Python","PHP"];
// // console.log(langs[0],langs[1],langs[2],langs[3]);
// console.log(...langs);
// const langs2=["javascript","c#",...langs]
// console.log(...langs2);

// const nums =[1,2,3,4,5,6,7,8,9];
// const [a,b,...num2]=nums;
// console.log(a,b);
// console.log(num2);

// const addNum=(a,b,c)=>console.log(a+b+c);
// const nums=[100,200,300];
// // addNum(nums[0],nums[1],nums[2]);
// addNum(...nums);
// const person = {
//     name: "Ömer",
//     age: 25,
//     salary: 3000
// };
// const langs=["C","Java","Python","PHP"];
// const name="Ömer";

// for(let prop in person){
//     console.log(prop,person[prop]);
// }

// for(let ind in langs){
//     console.log(ind,langs[ind]);
// // }
// for(let value of langs){
//     console.log(value);
// }
// for(let char of name){
//     console.log(char);
// }


// MAPLAR -KEY(ANAHTAR) VALUE(DEĞER)
// let mymap=new Map();
// console.log(typeof mymap);
// const key1="Ömer"
// const key2={a:10,b:20}
// const key3=()=> 2;

// mymap.set(key1,"String Değer");
// mymap.set(key2,"Object Literal Değer");
// mymap.set(key3,"Function Değer");

// console.log(mymap.get(key1));
// console.log(mymap.get(key2));
// console.log(mymap.get(key3));
// console.log(mymap);
// console.log(mymap.size);

// const cities=new Map();
// const key=[1,2,3];

// cities.set("Ankara",5);
// cities.set("İzmir",15);
// cities.set("İstanbul",25);
// cities.set(key,"Array");

// //FOR EACH İLE MAP DA GEZİNME

// cities.forEach(function (value,key) {
//    console.log(key,value); 
// });

// for(let [key,value] of cities){
//     console.log(key,value);
// }

// for (const [key,value] of cities) {
//     console.log(key);
// }
// for (const key of cities.keys()) {
//     console.log(key);
// }
// const array=[["key1","value1"],["key2","value2"]];
// const lastMap=new Map(array);
// console.log(lastMap);

// //MAPLARDAN ARRAY OLUŞTURMA

// const arr=Array.from(cities);
// console.log(arr);

// console.log(cities.get(key));

// SETLER __KÜMERLER:Bir değeri sadece bir defa taşır

const myset=new Set();
myset.add(100);
myset.add(100);
myset.add(3,14);
myset.add("String");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2,c:3});
// console.log(myset);
const myset2=new Set([100,3.14,"Mustafa"]);
// console.log(myset2);

// // //Size
// // console.log(myset2.size);

// // // // delete
// myset2.delete("Mustafa");
// // console.log(myset2);

// //HAS METODU
// console.log(myset2.has("Mustafa"));
// console.log(myset2.has(3.14));
// console.log(myset.has([1,2,3]));

// myset.forEach(function (value) {
//     console.log(value);
// })

// for (let value of myset[myset.size-1]) {
//     console.log(value);
// }

const array=Array.from(myset);
console.log(array[array.length-1]);
for (let value in array[array.length-1]) {
 console.log(value);   
}
