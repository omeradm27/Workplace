//AJAX CALLBACK HTTTP REQUEST


// // Yöntem 1

// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest();
//     }
//     //Get Request
//     get(url) {
//         this.xhr.open("GET", url);//Bağlantı Açık
//         this.xhr.onload = function () {
//             if (this.xhr.status == 200) {
//                 console.log(this.xhr.responseText);
//             }
//         }.bind(this);
//         this.xhr.send();
//     }
// }
// const request=new Request;
// request.get("https://jsonplaceholder.typicode.com/posts");


// Yöntem 2

// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest();
//     }
//     //Get Request
//     get(url) {
//         this.xhr.open("GET", url);//Bağlantı Açık
//         this.xhr.onload = function () {
//             if (this.status == 200) {
//                 console.log(this.responseText);
//             }
//         }
//         this.xhr.send();
//     }
// }
// const request=new Request;
// request.get("https://jsonplaceholder.typicode.com/posts");


// // Yöntem 3
// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest();
//     }
//     //Get Request
//     get(url, callback) {
//         this.xhr.open("GET", url);//Bağlantı Açık
//         this.xhr.onload = () => {//Arrow Function
//             if (this.xhr.status == 200) {
//                 callback(null, this.xhr.responseText);//isteğimiz bitti

//             } else {
//                 //Hata Durumu
//                 callback("Get Request : Herhamgi bir hata oluştu", null)
//             }
//         }
//         this.xhr.send();
//     }
//     // Post Request
//     post(url, data, callback) {
//         this.xhr.open("POST", url);//Bağlantı Açık
//         this.xhr.setRequestHeader("Content-type", "application/json");
//         this.xhr.onload = () => {
//             if (this.xhr.status === 201) {
//                 //Başarılı
//                 callback(null, this.xhr.responseText);
//             } else {
//                 callback("Post Request : Herhangi bir hata oluştu", null);
//             }
//         }
//         this.xhr.send(JSON.stringify(data));
//     }
//     // Put Request
//     put(url, data, callback) {
//         this.xhr.open("PUT", url);//Bağlantı Açık
//         this.xhr.setRequestHeader("Content-type", "application/json");
//         this.xhr.onload = () => {
//             if (this.xhr.status === 200) {
//                 //Başarılı
//                 callback(null, this.xhr.responseText);
//             } else {
//                 callback("Put Request : Herhangi bir hata oluştu", null);
//             }
//         }
//         this.xhr.send(JSON.stringify(data));
//     }

//         //Delete Request
//         delete(url, callback) {
//             this.xhr.open("DELETE", url);//Bağlantı Açık
//             this.xhr.onload = () => {//Arrow Function
//                 if (this.xhr.status == 200) {
//                     callback(null, "Veri Silme Başarılı Oldu ...");//isteğimiz bitti

//                 } else {
//                     //Hata Durumu
//                     callback("Delete Request : Herhamgi bir hata oluştu", null)
//                 }
//             }
//             this.xhr.send();
//         }

// }
// GET REQUEST PART
// const request = new Request;
// const albums = request.get("https://jsonplaceholder.typicode.com/posts", function (err, response) {
//     if (err === null) {
//         //    Başarlı
//         console.log(response);
//     }
//     else {
//         // hata
//         console.log(err);
//     }
// });
// console.log(albums);

// // POST REQUEST PART
// const request = new Request;
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album) {
//     if (err===null) {
//         console.log(album);
//     }else{
//         console.log(err);
//     }

// });

// // PUT REQUEST PART
// const request = new Request;
// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:142,title:"Tarkan"},function(err,album) {
//     if (err===null) {
//         console.log(album);
//     }else{
//         console.log(err);
//     }

// });

// // DELETE REQUEST PART
// const request = new Request;
// const albums = request.delete("https://jsonplaceholder.typicode.com/albums/10", function (err, response) {
//     if (err === null) {
//         //    Başarlı
//         console.log(response);
//     }
//     else {
//         // hata
//         console.log(err);
//     }
// });
// // console.log(albums);

