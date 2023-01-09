class Request {
    async get(url) {
         const response = await fetch(url);//Response Object 
        const datax = await response.json();//JSON Object
        return datax;
    }
    async post(url, data) {
  
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });//Response Object
        const datax = await response.json();//JSON Object
        return datax;
    }
    async put(url, data) {
       
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });//Response Object
        const datax = await response.json();//JSON Object
        return datax;
    }
    async delete(url) {
       
        const response = await fetch(url, {
            method: 'DELETE'
        });//Response Object
        // const data = await response.json();//JSON Object
        return "Veri Silme İşlemi Başarılı";
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
// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thiriller" })
// .then(newAlbum=>console.log(newAlbum))
// .catch(err=>console.error(err));
// PUT REQUEST
// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Thiriller" })
// .then(album=>console.log(album))
// .catch(err=>console.error(err))
// ;

// request.delete("https://jsonplaceholder.typicode.com/albums/1")
//     .then(message => {
//         console.log(message);
//     }).catch(err => console.error(err));