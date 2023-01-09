function UI() {
    // console.log("UI Yüklendi");

}
UI.prototype.addFilmToUI = function (newFilm) {
    // console.log(newFilm);
    //     <!-- <tr>
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //     <td></td>
    //     <td></td>
    //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //   </tr> -->
    //   <!-- <tr>
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //     <td></td>
    //     <td></td>
    //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //   </tr> -->
    const filmList = document.getElementById("films");
    console.log(filmList);
    filmList.innerHTML += `
    <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td class="filmTitle">${newFilm.title}</td>
    <td class="filmDirector">${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`;
}
UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}
UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body");
    //Alert divi oluşturma

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 1000);
}
UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films")
    films.forEach(function (film) {
        filmList.innerHTML += `
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>`;
    });
}
UI.prototype.deleteFilmFromUI = function (selected) {
    const selectedItem = selected.parentElement.parentElement;
    // console.log(selectedItem);
    selectedItem.remove();
}
UI.prototype.clearAllFilmsFromUI = function () {

    //Arayüzdeki tüm filmleri kaldırma   
    while (filmList.firstElementChild != null) {
        filmList.removeChild(filmList.firstElementChild);

    }


}