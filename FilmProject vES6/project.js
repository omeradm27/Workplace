const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const filmBody = document.getElementById("film-body");
const clearButton = document.querySelector("#clear-films")
const filmList = document.getElementById("films")

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmFromStorage();
        UI.loadAllFilms(films);
    });//Sayfa Yüklenince Storage den Filmleri çeker

    filmBody.addEventListener("click", deleteFilm);
    clearButton.addEventListener("click", clearAllFilms);
}
function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    console.log(title + director + url);
    if (title === "" || director === "" || url === "") {
        //HATA
        // console.log("Title boş")
        UI.displayMessages("Tüm alanları doldurunuz", "danger");
    } else {
        // YENİ FİLM OLUŞTURMA
        // console.log("Title Director ve URL dolu ")
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm);//Arayüze film ekleme
        Storage.addFilmToStorage(newFilm);
        UI.displayMessages("Film Başarıyla Eklendi...", "success")
    }
    UI.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}
function deleteFilm(e) {

    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        let item = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        Storage.deleteFilmFromStorage(item);
        UI.displayMessages("Silme İşlemi Başarılı...", "success")
    }

}
function clearAllFilms() {
    if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
        // console.log(filmList);
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
        UI.displayMessages("Tüm Filmler Başarıyla Silindi...", "success");
    }
}
