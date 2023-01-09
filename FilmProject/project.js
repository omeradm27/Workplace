const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const filmBody = document.getElementById("film-body");
const clearButton = document.querySelector("#clear-films")
const filmList = document.getElementById("films")

// console.log(urlElement);
//UI OBJESİNİ BAŞLATMA

const ui = new UI();
//Storage objesi üret
const storage = new Storage();
//TÜM EVENTLERİ YÜKLEME
eventListeners();
function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessages("Tüm alanları doldurunuz", "danger");
    } else {
        // YENİ FİLM OLUŞTURMA
        // console.log("Title Director ve URL dolu ")
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm);//Arayüze film ekleme
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film Başarıyla Eklendi...", "success")
    }
    ui.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}
function deleteFilm(e) {

    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        let item = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        storage.deleteFilmFromStorage(item);
        ui.displayMessages("Silme İşlemi Başarılı...", "success")
    }

}
function clearAllFilms() {
    if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
        // console.log(filmList);
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.displayMessages("Tüm Filmler Başarıyla Silindi...", "success");
    }
}
