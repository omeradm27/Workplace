class Storage {
    static getSearchedUsersFromStorage() {
        //TÜm Kullanıcı Al
        let users;
        if (localStorage.getItem("searched") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addSearchedUserToStorage(username) {
        //Kullanıcı Ekle
        let users = this.getSearchedUsersFromStorage();
        //indexof -1 gelirse arrayda yoktur
        if (users.indexOf(username) === -1) {
            users.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(users));
    }
    static clearAllUsersFromStorage() {
        //Tüm Kullanıcıları Sil
        localStorage.removeItem("searched");
    }
}