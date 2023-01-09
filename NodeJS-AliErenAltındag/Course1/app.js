// Assigment-1
// var a=("Ekmek".slice(0,3)).toUpperCase();
// var b=("Pasta".slice(0,3)).toUpperCase();
// var c=("Börek".slice(0,3)).toUpperCase();

// console.log(`${a}-${b}-${c}`); 

// var num=["test",23,34];
// num.forEach(element => {
//     if(typeof(element)=="number"){
//         element%2==1?console.log(`${element} --> Tek sayı`):console.log(`${element} --> Çift sayı`)
//     }else{
//         console.log(element+"--> sayı değil...");
//     }
// });

// var week_day=55;
// switch (week_day%12) {
//     case 1:
//         console.log("Ocak");
//         break;
//     case 2:
//         console.log("Şubat");
//         break;
//     case 3:
//         console.log("Mart");
//         break;
//     case 4:
//         console.log("Nisan");
//         break;
//     case 5:
//         console.log("Mayıs");
//         break;
//     case 6:
//         console.log("Haziran");
//         break;
//     case 7:
//         console.log("Temmuz");
//         break;
//     case 8:
//         console.log("Ağusutos");
//         break;
//     case 9:
//         console.log("Eylül");
//         break;
//     case 10:
//         console.log("Ekim");
//         break;
//     case 11:
//         console.log("Kasım");
//         break;
//     case 0:
//         console.log("Aralık");
//         break;
//     default:
//         console.log("Girilen Ay Uygun Değil");
//         break;
// }
// var test="Ahmet Ayşe Efe Mehmet"
// var response=test.split(" ");
// console.log(response);
// response.forEach(element => {
//     console.log(element.includes("A"));    
// });
// console.log(response.lastIndexOf("Ahmet",2));
// console.log(response.lastIndexOf("Ahmet"));

// response.splice(3,1)
// console.log(response);

// response=response.slice(5,6)
// console.log(response);

// response.splice(3,0,"test",2,3)
// console.log(response);

// var arr1=[1,2,3,4,5];
// var arr2=[6,7,8,9,10];
// var response=arr1.concat(arr2);
// var response=[...arr1,...arr2];
// console.log(response);
// var arr3=["Hello"+"World"+"How"+"Are"+"You"+"?"];
// var response=arr3.join("-");
// response=arr1.reverse();
// console.log( response);
// response.pop();
// console.log( response);
// response.shift();
// console.log( response);
// response.unshift(9,10,11);
// console.log( response);
// var list=arr1
// var list=[...arr1]
// list.pop();
// console.log(list);
// console.log(arr1);
// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     console.log(element);
// }
// for (const element of arr3) {
//     console.log(element);
// }

// var length=12;
// for (let index = 1; index <= length; index++) {   
//        console.log("*".repeat(index));          
// }
// var arr=[];
// var i=0;
// for (let index = 1; arr.length < 5; index++) {
//       if (index%7==0 && index%9==0) {
//        arr[i++]=index;
//       }       
// }

// console.log(arr);

//Break-continue-label
// ilk_dongu:
// for (let i = 0; i < 10 ; i++) {
//       ikincidongu:
//       for (let j = 0; j < 10; j++) {
//             if (j===5) {
//                   break ikincidongu;
//             }           
//             console.log("J : "+j);
//       }
//       console.log("İ : "+i);

// }
// ilk_dongu:
// for (let i = 0; i < 10 ; i++) {
//       ikincidongu:
//       for (let j = 0; j < 10; j++) {
//             if (j===5) {
//                   continue ikincidongu;
//             }           
//             console.log("J : "+j);
//       }
//       console.log("İ : "+i);

// }

// Arguments
// function test(x) {
//       console.log(arguments);
// }
// test(1,2,3,4,5);

// function test(...x) {
//       console.log(x[1]);
// }
// test(1,2,3,4,5);

// Recursive

// function recursive(x) {
//       console.log(x);
//       if (x>0) {
//             recursive(x-1);
//       }
// }
// recursive(4)

// Assigment-2
// function callbackfunc(result){
//       (result==true)?console.log("Çift"):console.log("Tek");     
// }
// function ciftmi(num,ahmet) {
//       var res=(num%2==0)?true:false;
//     ahmet(res);
// }

// ciftmi(5,callbackfunc);
// ciftmi(4,callbackfunc);

// function factorial(num) {
//       var res
//       if (num == 0) {
//             return 1;
//       } else {
//             return num * factorial(--num);            
//       }     
// }
// console.log(factorial(4));

// var array=["ali","ahmet","mehmet","hüseyin"];
// array.forEach((e,i)=>{
//       console.log(i,e);
// })

// var user = {
//       name: "Ömer",
//       age: "28",
//       address: {
//             street: "X street",
//             no: 3
//       },
//       test() {
//             console.log("Test!!");
//       }
// }
// delete user["age"]
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// var uid="234432"
// var data={name:"ali",age:21};
//  var users={
//       "9348222":{name:"ahmet",age:25},
//       "4344545":{name:"ahmet",age:25},
//       [uid]:data
//  }
//  console.log(users);

// var user = {
//       name: "Ömer",
//       age: "28",
//       address: {
//             street: "X street",
//             no: 3
//       },
//       test() {
//             console.log("Test!!");
//       }
// }
// var street=(user.address?.street)?user.address.street:"Adres Bulunamadı"
// console.log(street);
// user.email="a@a.com"
// Object.preventExtensions(user);
// user.email = "a@a.com"
// console.log(user);
// console.log(Object.isExtensible(user));
// Object.seal(user);
// user.x="asd"
// delete(user.name);
// console.log(user);
// console.log(Object.isSealed(user));
// Object.freeze(user);
// delete(user.name);
// Object.isFrozen(user);

// REFERANS KAVRAMI
// var data={name:"ahmet"};
// // var data2={...data};//Spread Syntax
// data2=Object.assign({},data);//Assign syntax   m m
// var data3=data;
// data3.name="Ali"
// data2.name="mehmet"
// console.log(data);
// console.log(data2);
// console.log(data3);

// var user = {
//       name: "Ömer",
//       age: "28",
//       address: {
//             street: "X street",
//             no: 3
//       },
//       test() {
//             console.log("Test!!");
//       }
// }
// var user2={...user};
// user2.name="Mehmet";
// user2.address.street="Y street"//Spread syntax copy yapmamıza rağmen street referans yerleri aynı olduğu için değişim ikisini de etkiledi
// console.log(user);
// console.log(user2);

//DEEP COPY
// user2=JSON.parse(JSON.stringify(user));
// user2.name="Mehmet";
// user2.address.street="Y street"
// console.log(user);
// console.log(user2);

// var liste=[2,3,4,5,6]
// console.log(liste);
// liste=liste.map(e=> e**2)
// liste=liste.map(e=> ({"index":e}))
// console.log(liste);

// var liste=["ali","ahmet","mehmet","zeynep","fatma"]
// console.log(liste);
// liste=liste.map((e,i)=> `${i+1}:${e}`).join("\n")
// console.log(liste);
// //find
// var result=liste.find(e=> e.startsWith("a"))
// console.log(result);
// var ages=[12,23,1,24,12,45,76,17,11,14];
// ages_older=ages.filter(e=>e>=18)
// console.log(ages_older);

// SORTING
// var arr=[1,2,43,45,11,12,3,4,"abs","vss","asd","dfg"];
// arr=arr.sort((a,b)=>b-a);//Büyüktenküçüğe
// console.log(arr);

// var obj={
//       "1":5,
//       "2":3,
//       "3":7,
//       "4":6
// }
// // var result=Object.entries(obj).sort((a ,b)=>a[1]-b[1]);
// // console.log(result);

// var liste=["alasdai","ahet","mehmeasdsadt","zeyaaep","fa"];
// var res=liste.sort((a,b)=>a.length-b.length);
// console.log(res);

// REDUCE
// var list=[1,2,8,2,7,3];
// var res=list.reduce((response,value)=>response+value,0)
// console.log(res);

// var list = ["a", "b", "c", "f", "a", "c", "a", "b", "e", "c", "c"];
// var result = list.reduce((response, current) => {
//       // if (!(current in response)) {
//       //       response[current] = 1;
//       // }else response[current]+=1;
//       response[current]=(current in response)? response[current]+1:1;
//       return response
// },{}
// )
// console.log(result);

// var array = [1, 2, 4, 5, 2, 2, 4, 2, 1, 1];
// var result = array.reduce((pVal, cVal) => {
//       if(!(pVal.includes(cVal))){
//             pVal.push(cVal);
//       }
//       return pVal;
// }, [])


// console.log(result);

// var array = [1, 2, 4, 5, 2, 2, 4, 2, 1, 1]; 
// var result=array.every(e=>e>1);
// console.log(result);
// result=array.some(e=>e>4);
// console.log(result);