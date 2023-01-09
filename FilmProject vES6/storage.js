class Storage {
    static addFilmToStorage (newFilm) {
        // console.log(newFilm.url);
        let films=this.getFilmFromStorage();
        films.push(newFilm);
        localStorage.setItem("films",JSON.stringify(films));
    
    }
    
    static getFilmFromStorage () {
        let films;
    
        if (localStorage.getItem("films") === null) {
            films = [];
        } 
        else {
            films = JSON.parse(localStorage.getItem("films"))
        }
        return films;
    }
    static deleteFilmFromStorage(selectedFilm){
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
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
        
    }

}

