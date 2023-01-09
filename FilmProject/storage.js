function Storage() {

}

Storage.prototype.addFilmToStorage = function (newFilm) {
    // console.log(newFilm.url);
    let films=this.getFilmFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.getFilmFromStorage = function () {
    let films;

    if (localStorage.getItem("films") === null) {
        films = [];
    } 
    else {
        films = JSON.parse(localStorage.getItem("films"))
    }
    return films;
}
Storage.prototype.deleteFilmFromStorage=function(selectedFilm){
    let films=this.getFilmFromStorage();
    // console.log("SelectedFilm-->"+selectedFilm);
    // console.log("films-->"+films);
   
    films.forEach(function (film, index) {
        // console.log(index+". Film-->"+film.textContent);
        if (film.title === selectedFilm) {
            films.splice(index, 1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));
}
Storage.prototype.clearAllFilmsFromStorage=function(){
    localStorage.removeItem("films");
    
}