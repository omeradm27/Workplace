import { Request } from "./request";
import { UI } from "./ui";
// ELEMENTLERİ SEÇME
const empForm = document.getElementById("employee-form");
const empNameInp = document.getElementById("name");
const empDepartInp = document.getElementById("department");
const empSalaryInp = document.getElementById("salary");
const employeeList = document.getElementById("employees");
const cardBody = document.querySelector(".card-body");

const updateEmpBut = document.getElementById("update");
const request = new Request("http://localhost:3000/employees");
const ui = new UI();

let updateState = null;
eventListener();
// GET TESTİ
// request.get()
// .then(employees=> console.log(employees))
// .catch(err=>console.log(err));

//POST Testi
// request.post({name:"Ahmet",department:"Kasap",salary:5000})
// .then(employees=> console.log(employees))
// .catch(err=>console.log(err));

// PUT TESTİ
// request.put(4,{name:"Mehmet",department:"Network",salary:15000})
// .then(employees=> console.log(employees))
// .catch(err=>console.log(err));

// DELETE TESTİ
// request.delete(3)
// .then(employees=> console.log(employees))
// .catch(err=>console.log(err));

function eventListener() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    empForm.addEventListener("submit", addEmployee);
    employeeList.addEventListener("click", updateOrDelete);
    updateEmpBut.addEventListener("click", updateEmployee);

}
function getAllEmployees() {
    request.get()
        .then(employees => {
            ui.addAllEmployeeToUI(employees);
        })
        .catch(err => console.error(err));
}
function addEmployee(e) {
    const empName = empNameInp.value.trim();
    const empDepart = empDepartInp.value.trim();
    const empSalary = empSalaryInp.value.trim();

    if (empName === "" || empDepart === "" || empSalary === "") {
        alert("Lütfen Tüm Alanları Doldurunuz");
    }
    else {
        request.post({ name: empName, department: empDepart, salary: Number(empSalary) })
            .then(employee => ui.addEmployeeToUI(employee))
            .catch(err => console.error(err));

    }
    ui.clearInputs();
    e.preventDefault();
}
function updateOrDelete(e) {
    if (e.target.id === "delete-employee") {
        // Employee Silme
        // console.log(e.target.parentElement.parentElement);
        deleteEmployee(e.target);
    } else if (e.target.id === "update-employee") {
        //Employee Güncelleme
        updateEmployeeController(e.target.parentElement.parentElement);
        // console.log(e.target.parentElement.parentElement);
    }
}
function deleteEmployee(targetEmp) {
    const id = targetEmp.parentElement.previousElementSibling.previousElementSibling.textContent;
    request.delete(id).then(message => {
        ui.deleteEmployeeFromUI(targetEmp.parentElement.parentElement);
    }).catch(err => console.error(err));
}
function updateEmployeeController(targetEmp) {
    ui.toggleUpdBut(targetEmp);
    if (updateState === null) {
        updateState = {
            updateId: targetEmp.children[3].textContent,
            updateParent: targetEmp
        }
    } else {
        updateState = null;
    }
}
function updateEmployee() {
    if (updateState) {
        //Güncelleme
        let newName = empNameInp.value.trim();
        let newDep = empDepartInp.value.trim();
        let newSalary = Number(empSalaryInp.value.trim());
        const data = { name: newName, department: newDep, salary: newSalary }
        request.put(updateState.updateId, data)
            .then(updatedEmployee => {
                ui.updateEmpOnUI(updatedEmployee,updateState.updateParent);
            })
            .catch(err => console.log(err));
    }
}

