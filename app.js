let fullEmployee = [];
let employeeData=document.getElementById("employee")
let form = document.getElementById("form");
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
Employee.prototype.render = function (){

    let Img = document.createElement("img")
    Img.setAttribute("src",this.imageURL)
    employeeData.appendChild(Img)


    let fullName = document.createElement("p")
    fullName.textContent=`Name: ${this.fullName} - ID : ${idNumber()}`
    employeeData.appendChild(fullName)

    let id = document.createElement("p")
    id.textContent=`Department:${this.Department} -level:${this.level} `
   
    employeeData.appendChild(id)

    let Department = document.createElement("p")
    Department.textContent=`${this.Salary()}`
    employeeData.appendChild(Department)
/*
    let level = document.createElement("p")
    level.textContent=this.level
    employeeData.appendChild(level)

    let Salary = document.createElement("p")
    
     Salary.textContent=this.Salary()
    
    employeeData.appendChild(Salary)
*/
}

for (i = 0; i < fullEmployee.length; i++) {
    let item = fullEmployee[i];
    item.render()

}
/*Employee.prototype.render = function () {
  for (i = 0; i < fullEmployee.length; i++) {
    let item = fullEmployee[i];
    document.write(`<div class="employee">

    <img src=${item.imageURL}  width="50px">


        <p>Name: ${item.fullName} - ID: ${item.employeeID} </p>


        <p> Department:  ${item.Department} - Level ${item.Level} </p> 

        <p>  ${item.netSalary()} </p>
        </div>`);
  }
};

Ghazi.render();
/*
/*console.log(form)*/

function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.fullName.value;
  let Department = event.target.department.value;
  let level = event.target.level.value;
  let imageUrl = event.target.imageUrl.value;
  let newEmployee = new Employee(idNumber(), name, Department, level, imageUrl);
  newEmployee.render();
}
form.addEventListener("submit", handleSubmit);

/*const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}*/
