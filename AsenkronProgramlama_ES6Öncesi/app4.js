// function getData(data) {//Promise objesi döndüren fonksiyon
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             // resolve("Olumlu sonuç");
//             // reject("Olumsuz sonuç");
//             if (typeof data === "string") {
//                 resolve(data);
//             } else {

//                 reject(new Error("Lütfen String bir değer girin"));
//             }
//         }, 5000);
//     });
// }

// // getData("Merhaba").then(function(response){
// //     console.log(response);
// // });
// // getData("Merhaba").catch(function(err){
// //     console.log(err);
// // });
// // getData("Merhaba").then(function (response) {
// //     console.log("Gelen Değer : " + response);
// // }).catch(function (err) {
// //     console.log(err);
// // });
// // getData(24).then(function (response) {
// //     console.log("Gelen Değer : " + response);
// // }).catch(function (err) {
// //     console.error(err);
// // });

// // // ARROW FUNCTİON HALİ
// // getData("Merhaba")
// // .then(response =>console.log("Gelen Değer : " + response))
// // .catch (err=>console.log(err));

// // getData(24)
// // .then(response=>console.log("Gelen Değer : " + response))
// // .catch(err=>console.error(err));
// function addTwo(number){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if (typeof number==="number") {
//                 resolve(number+2);
//             }else{
//                 reject(new Error("Lütfen bir sayı girin"))
//             }
//         }, 3000);
//     })
// }

// // Bir tane catch birden fazla then olabilir
// addTwo("ta")
// .then(response=>{
//     console.log(response);
//     return response+2;
// }).then(response2=>console.log(response2))
// .catch(err=>console.error(err));

// function getTextFile() {//Text Dosyası
//     // console.log(this);
//     fetch("example.txt")
//     .then(response=>response.text())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));
// }
// getTextFile();

// function getJsonFile() {//Json Dosyasından çekme
//     // console.log(this);
//     fetch("example.json")
//     .then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));
// }
// getJsonFile();

// https://jsonplaceholder.typicode.com/posts
// function getExternalAPI() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => console.error(err));
// }
// getExternalAPI();
class Request {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));

        })
    }
    post(url, data) {
        return new Promise(resolve, reject => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        }
        )
    }
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then(response => response.json())
                .then(data => console.log(data))
                .catch(err => reject(err));
        }
        )
    }
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
            }).then(resolve("Silme İşlemi Başarılı.."))
                .catch(err => reject(err));
        })
    }

}


const request = new Request();
// GET REQUEST
// let albums;
// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(data => {
//         albums = data;
//         console.log(albums);
//     }).catch(err => console.error(err));
//     // console.log(albums);//asenkron
// POST REQUEST
// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thiriller" });
// PUT REQUEST
// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Thiriller" })
// .then(album=>console.log(album))
// .catch(err=>console.error(err))
// ;

request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => {console.log(message);
    }).catch(err => console.error(err));