//Elementleri Seçme
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListener();

function eventListener() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);

}
function getData(e) {
    let username = nameInput.value.trim();
    if (username === "") {
        alert("Lütfen Geçerli Bir Kullanıcı Adı Giriniz")
    } else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found") {
                    // HATA MESAJI
                    // console.error("Kullanıcı Bulunamadı");
                    ui.showError("Kullancı Bulunamadı")
                }
                else {
                    ui.addSearchedUserToUI(username);
                    Storage.addSearchedUserToStorage(username)
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showError(err));
    }
    ui.clearInput();    //INPUT TEMİZLEME
    e.preventDefault();
}
function clearAllSearched() {
    //Tüm Arananları Temizle
    if(confirm("Emin Misiniz ? ")){
        //Silme
        Storage.clearAllUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }

}
function getAllSearched() {
    //Arananları Storageden al ve UI ye yükle
    let users = Storage.getSearchedUsersFromStorage();
    let result="";
    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`;
    });
    lastUsers.innerHTML=result;
}