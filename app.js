'use strict';
let fullEmployee = [];
let form = document.getElementById("form");
let tableContainer = document.getElementById("root");
let tableEl = document.createElement("table");
tableContainer.appendChild(tableEl);
function Employee(employeeID, fullName, Department, Level, imageURL) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.Department = Department;
  this.Level = Level;
  this.imageURL = imageURL;
  fullEmployee.push(this);
}
function idNumber() {
  let val = Math.floor(1000 + Math.random() * 9000);
  return val;
}

let Ghazi = new Employee(
  idNumber(),
  "Ghazi Samer",
  "Administration",
  "Senior",
  "https://github.com/LTUC/prep-course-py-02/blob/main/Day08/Task/assets/Ghazi.jpg?raw=true"
);
let Lana = new Employee(
  idNumber(),
  "Lana Ali",
  "Finance",
  "Senior",
  "https://github.com/LTUC/prep-course-py-02/blob/main/Day08/Task/assets/Lana.jpg?raw=true"
);
let Tamara = new Employee(
  idNumber(),
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "https://github.com/LTUC/prep-course-py-02/blob/main/Day08/Task/assets/Tamara.jpg?raw=true"
);
let Safi = new Employee(
  idNumber(),
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "https://github.com/LTUC/prep-course-py-02/blob/main/Day08/Task/assets/Safi.jpg?raw=true"
);
let Omar = new Employee(
  idNumber(),
  "Omar Zaid",
  "Development",
  "Senior",
  "https://github.com/LTUC/prep-course-py-02/blob/main/Day08/Task/assets/Omar.jpg?raw=true"
);
let Rana = new Employee(
  idNumber(),
  "Rana Saleh",
  "Development",
  "Junior",
  "https://github.com/LTUC/prep-course-py-02/blob/main/Day08/Task/assets/Rana.jpg?raw=true"
);
let Hadi = new Employee(
  idNumber(),
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "https://github.com/LTUC/prep-course-py-02/blob/main/Day08/Task/assets/Hadi.jpg?raw=true"
);

Employee.prototype.Salary = function () {
  let max = 0;
  let min = 0;
  if (this.Level == "Senior") {
    max = 2000;
    min = 1500;
  } else if (this.Level == "Mid-Senior") {
    min = 1000;
    max = 1500;
  } else if (this.Level == "Junior") {
    min = 500;
    max = 1000;
  }

  return Math.floor(Math.random() * (max - min)) + min;
};
/*fullEmployee.Salary()*/

Employee.prototype.netSalary = function () {
  let tax = this.Salary() * 0.075;
  let Ns = this.Salary() - tax;
  return Ns;
};
Employee.prototype.averageSalary = function (nameDepartment) {
    
    let salaryAdministration = 0;
    let salaryMarketing = 0;
    let salaryDevelopment = 0;
    let salaryFinance = 0;
    for (let i = 0; i < fullEmployee.length; i++) {
      let item = fullEmployee[i];
  
      if (item.Department == "Administration") {
        salaryAdministration = salaryAdministration + item.netSalary();
      } else if (item.Department == "Marketing") {
        salaryMarketing = salaryMarketing + item.netSalary();
      } else if (item.Department == "Development") {
        salaryDevelopment = salaryDevelopment + item.netSalary();
      } else if (item.Department == "Finance") {
        salaryFinance = salaryFinance + item.netSalary();
      }
    }
    if (nameDepartment == "Administration") {
      return NumDpEp(nameDepartment) / salaryAdministration;
    } else if (nameDepartment == "Marketing") {
      return NumDpEp(nameDepartment) / salaryMarketing;
    } else if (nameDepartment == "Development") {
      return NumDpEp(nameDepartment) / salaryDevelopment;
    } else if (nameDepartment == "Finance") {
      return NumDpEp(nameDepartment) / salaryFinance;
    }
  };
Employee.prototype.render = function () {
  for (let i = 0; i < fullEmployee.length; i++) {
    let item = fullEmployee[i];
    document.write(`<div class="employee">

    <img src=${item.imageURL}  width="50px">


        <p>Name: ${item.fullName} - ID: ${item.employeeID} </p>


        <p> Department:  ${item.Department} - Level ${item.Level} </p> 

        <p>  ${item.netSalary()} </p>
        </div>`);
  }
};

Employee.prototype.NumDpEp = function (nameDepartment) {
   
    let contAdministration = 0;
    let contMarketing = 0;
    let contDevelopment = 0;
    let contFinance = 0;
    for (let i = 0; i < fullEmployee.length; i++) {
        let item = fullEmployee[i];
     
      if (item.Department == "Administration") {
        contAdministration = contAdministration + 1;
      } else if (item.Department == "Marketing") {
        contMarketing = contMarketing + 1;
      } else if (item.Department == "Development") {
        contDevelopment = contDevelopment + 1;
      } else if (item.Department == "Finance") {
        contFinance = contFinance + 1;
      }
    }
    if (nameDepartment == "Administration") {
      return contAdministration;
    } else if (nameDepartment == "Marketing") {
      return contMarketing;
    } else if (nameDepartment == "Development") {
      return contDevelopment;
    } else if (nameDepartment == "Finance") {
      return contFinance;
    }
  };
Employee.prototype.renderTable = function () {
    let trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
  
    let tdEl1 = document.createElement("td");
    trEl.appendChild(tdEl1);
    tdEl1.textContent = this.Department;
  
    let tdEl2 = document.createElement("td");
    trEl.appendChild(tdEl2);
    tdEl2.textContent = this.NumDpEp(this.Department);
  
    let tdEl3 = document.createElement("td");
    trEl.appendChild(tdEl3);
    tdEl3.textContent = this.averageSalary(this.Department);
  };
Ghazi.render();

/*console.log(form)*/

function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.fullName.value;
  let Department = event.target.department.value;
  let level = event.target.level.value;
  let imageUrl = event.target.imageUrl.value;
  let newEmployee = new Employee(idNumber(), name, Department, level, imageUrl);
  newEmployee.render();
  newEmployee.renderTable();
  saveData(fullEmployee);
}
// form.addEventListener('submit',handleSubmit);

/*const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}*/
function saveData(data) {
  let stringObj = JSON.stringify(data);
  localStorage.setItem("employee", stringObj);
}
saveData(fullEmployee);
function getData() {
  let retrievedData = localStorage.getItem("employee");
  console.log(retrievedData);
  let arrData = JSON.parse(retrievedData);
  console.log(arrData);
  fullEmployee = [];
  for (let i = 0; i < arrData.length; i++) {
    new Employee(
      idNumber(),
      arrData[i].name,
      arrData[i].Department,
      arrData[i].Level,
      arrData[i].imageURL
    );
  }

  for (let i = 0; i < fullEmployee.length; i++) {
    fullEmployee[i].render();
    fullEmployee[i].renderTable();
  }
}
getData();



// for (let i = 0; i < fullEmployee.length; i++) {
//     fullEmployee[i].renderTable();
// }
