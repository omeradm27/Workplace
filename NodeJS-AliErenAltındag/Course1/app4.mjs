
// TRY-CATCH_FINALLY
// try {
//     console.log("Başladı");
//     throw new Error("Test Hatası")
//     console.log("b");
// } catch (e) {
//     console.log("Bir hata oluştu");
// }finally{
//     console.log("Bitti");
// }
// console.log("a");

// import { rejects } from "assert";
// import { copyFile } from "fs";
// import { resolve } from "path";
// import { stringify } from "querystring";

// process.on("uncaughtException",e=>{
//     console.log("Bir Hata Yakalandı");
// })

// // throw new Error("Test")
// try {
//     throw new Error("Test")
// } catch (e) {
//     console.log("Catch Tarafıdan hata yakalandı");

// }
//File içinden data okuma
//   import fs from "fs"
//   fs.readFile("./a.txt","utf-8",(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
//   })

// function getUserData(id, callback) {
//     var user = { "name": "Ömer" }
//     if (!user) {
//         return callback(new Error("User Not Found"))
//     }
//     callback(null,user)
// }
// getUserData(1,(err,data)=>{
//     if(err)console.log(err);
//     console.log(data);
// })

// function test(callback) {
//     setTimeout(() => {
//         console.log("TimeOutÇalıştı");
//         callback()
//     }, 3000);
// }
// test(()=>{
//     console.log("Bitti");    
// });

// import fs from 'fs';
// const now=Date.now();
// // const data=fs.readFileSync("./a.txt",{encoding:"utf-8",flag:"r"})
// const data=fs.readFile("./a.txt",{encoding:"utf-8",flag:"r"},(err,data)=>{
//     if(err)return console.log(err);
//     console.log(Date.now()-now);
// })

// // console.log(data);
// console.log("Bitti");

// PROMİSE_RESOLVE_REJECT
// const result = new Promise((resolve, reject) => {
//     // resolve(true);
//     // resolve("Promise Çalıştı");
//     setTimeout(() => {
//         console.log("Timeout Bitti");
//         reject("Bir Hata Oluştu")
//         // resolve("Resolve Çalıştı");
//     }, 2000)
// });
// // PENDİNG
// // RESOLVE - FULLFİLLED
// // REJECT-REJECTED
// result
//     .then((value) => {
//         console.log(value);
//     }).catch((err) => {
//         console.log(err);

//     }).finally(() => {
//         console.log("Program Bitti");

//     });

// FETCH
// import fetch from "node-fetch";
// fetch("https://www.google.com.tr/?hl=tr")
//     .then(res =>res.json())
//     .then(response=>console.log(response))


// var arr=[1,2,3,5,6]
// Promise.any(arr.map(async v=>new Promise((resolve,reject)=>setTimeout(()=>resolve(v*2)),5000)))
// .then(result=>console.log(result))
// Promise.all(arr.map(async v=>new Promise((resolve,reject)=>setTimeout(()=>resolve(v*2)),5000)))
// .then(result=>console.log(result))
// import {promisify} from 'util';
// var sleep=promisify(setTimeout)
// await sleep(3000)
// console.log("3 Saniye Bekledi");
// var map=new Map()
// map.set("a",1)
// map.set("b",2)
// map.set("c",3)

// console.log(map.size);
// map.clear()
// map.delete("c")
// console.log(map);
// console.log(map.has("a"));

// console.log(map.keys());
// console.log(...map.values());
// map.forEach((value,key)=>{
//     console.log(value,key);
// })
// for (var [value,key] of map) {
//     console.log(value,key);
// }
// console.log(Object.fromEntries(map));


// var map =new Map([["a",1],["b",2]])
// var map2=new Map(map);// copying mapp object

// map2.set("a",3)
// console.log(map,map2);
// var a=new Map()
// const test=function(){console.log("object");}
// a.set("b",1)
// a.set("a",2)
// a.set("c",4)
// a.set("v",5)

// console.log(a.keys());
// Map objesini json stringify ile pare etme yani map i objeye çevirme
// console.log(JSON.parse(JSON.stringify(Object.fromEntries(a))));

// const kume=new Set(["a","b","c","d","c","e"])
// kume.add("x")
// kume.add("y")
// kume.delete("c")
// console.log(kume);
// console.log(kume.size);
// console.log(...[kume][0]);
// console.log(kume.has("a"));

// VAR LET CONST
// var değişkeni global scopeda da kullanabiliyoruz
// let const ise block scopa da ancak kullanabiliyoruz
//const değerinde sonradan initialize edilmez ancak let edilebilir
// Garbage Collector -Memory mangement da veri eklenip sildikten sonra memery de boşa yer kaplıyor Memory Leak


// HOISTING analiz edilip ona göre program çalıştırılır
//ilk declare tanır
//sonra initialize tanır
//sonra assigment tanır
//TDP-Tempral Dead Zone değişkenin erişilemez olduğu bölgeden initialize edlilen bölgeye kadarki olanki kısım


// HATA ALINAN KOD
// let a = 5
// function print() {
//     console.log(a);
//     let a = 3
// }
// print()

// 1. a değişkeni declare edildi
// 2. print değerini initialize ve declare etti
// 3.print fonksiyonu çapırıldı
// 4. a değişkeni declare edildi
// 5.console.log(a)
// 6.a yı 3 değeri ile initialize edecekti

