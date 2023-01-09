export class UI {
    constructor() {
        this.empNameInp = document.getElementById("name");
        this.empDepartInp = document.getElementById("department");
        this.empSalaryInp = document.getElementById("salary");
        this.employeeList = document.getElementById("employees");
        this.updateEmpBut = document.getElementById("update");
    }
    addAllEmployeeToUI(employees) {
        let result = "";
        employees.forEach(employee => {
            result += `
            <tr>                                                    
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr> 
            `;

        });
        this.employeeList.innerHTML = result;


    }
    addEmployeeToUI(employee) {
        this.employeeList.innerHTML += `
        <tr>                                                    
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr> 
        `;
    }
    deleteEmployeeFromUI(element) {
        element.remove();
    }
    toggleUpdBut(target) {

        if (this.updateEmpBut.style.display === "none") {
            this.updateEmpBut.style.display = "block";
            this.addEmployeeInfoToUI(target);
        } else {
            this.updateEmpBut.style.display = "none";
            this.clearInputs();
        }
    }
    addEmployeeInfoToUI(target) {
        const children = target.children;
        this.empNameInp.value = children[0].textContent;
        this.empDepartInp.value = children[1].textContent;
        this.empSalaryInp.value = children[2].textContent;
    }
    updateEmpOnUI(employee, parent) {
        // console.log(employee);
        parent.innerHTML = `
        <tr>                                                    
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr> 
        `;
        this.clearInputs();
        

    }
    clearInputs() {//INPUTLARI TEMİZLEDİK
        this.empNameInp.value = "";
        this.empDepartInp.value = "";
        this.empSalaryInp.value = "";
    }
}