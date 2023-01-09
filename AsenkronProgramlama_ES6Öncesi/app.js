//HTTP Status
// 200:OK
// 403:Frobidden
// 404:Not Found
// 505:Internal Server Error

// readyState	Holds the status of the XMLHttpRequest. Changes from 0 to 4:
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready




// document.getElementById("btn").addEventListener("click", function () {
//     const xhr = new XMLHttpRequest();

//     //    xhr.onreadystatechange=function () {
//     //     // console.log(this.readyState);
//     //     // console.log(this.status);
//     //     if (this.status==200&&this.readyState==4) {
//     //         //Response Hazır
//     //         console.log(this.responseText);
//     //     }
//     //    }
//     // xhr.onloadstart=function(){
//     //     console.log("Server connection is established "+this.readyState);
//     // }
//     // xhr.onprogress=function () {
//     //     console.log("Progreess İşleniyor "+this.readyState);

//     // }
//     xhr.onload = function () {
//         // console.log(this.readyState);
//         if (this.status === 200) {
//             document.getElementById("ajax").textContent = this.responseText;
//         }
//     }
//     xhr.open("GET", "example.txt", true);
//     xhr.send();
//     //    console.log(xhr);
// });

document.getElementById("ajax").addEventListener("click", getAllEmployees);

function getAllEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "employees.json", true);
    xhr.onload = function () {
        let list = document.getElementById("employees");
        if (this.status == 200) {
            let employees = JSON.parse(this.responseText);
            employees.forEach(function (employee) {
                list.innerHTML += `
                <tr>
<td>${employee.name}</td>
<td>${employee.department}</td>
<td>${employee.salary}</td>
</tr>
`;
            })



        }
    }
    xhr.send();
}