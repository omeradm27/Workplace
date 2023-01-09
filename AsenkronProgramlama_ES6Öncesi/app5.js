// async function test(data) {
//     //Promise return new Promise
//     // return data;
//     let promise= new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Bu Bir değerdir");
//         }, 5000)
//     });
//     let response=await promise;//5 Sn bekliyor
//     // console.log(response);
//     // console.log("naber");
//     return response;
// }
// console.log(test("Merhaba").then(response => console.log(response)));
// // test("Merhaba")


// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         }, 5000);
//     });
//     const response=await promise;
//     return response;
// }
// testData("thriller").then(data=>console.log(data))
// .catch(err=>console.error(err));

async function getAlbums(url) {
    const response = await fetch(url);//Response Object
    // console.log(response);
    const data = await response.json();//Json Object
    // console.log(data);
    return data;
}
getAlbums("https://jsonplaceholder.typicode.com/albums/50")
.then(sonuc => console.log(sonuc));