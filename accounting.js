"use strict";
let table = document.getElementById("table");
let DepartmentArray = ["Administration", "Finance", "Marketing", "Development"];

let retrievedData = localStorage.getItem("employee");
let arrData = JSON.parse(retrievedData);

function renderTable() {

  console.log(arrData);
  if (arrData != null) {
    for (let i = 0; i < DepartmentArray.length; i++) {
      let row = document.createElement("tr");
      table.appendChild(row);
      let rowData = document.createElement("td");
      row.appendChild(rowData);
      rowData.textContent = DepartmentArray[i];
      let employeeNumber = document.createElement("td");
      row.appendChild(employeeNumber);
      employeeNumber.textContent = NumDpEp(DepartmentArray[i]);

      let totalSalary = document.createElement("td");
      row.appendChild(totalSalary);
      totalSalary.textContent =  localStorage.getItem(`totalSalary${DepartmentArray[i]}`);

      let averageSalary = document.createElement("td");
      row.appendChild(averageSalary);
      averageSalary.textContent =  localStorage.getItem(`averageSalary${DepartmentArray[i]}`);
     
    }

     let footer =document.createElement("tr")
     table.appendChild(footer)

     let Sum =document.createElement("td")
     footer.appendChild(Sum)
     Sum.textContent="Sum"

    let sumNumDpEp =document.createElement("td")
    footer.appendChild(sumNumDpEp)
     
    sumNumDpEp.textContent=NumDpEp(DepartmentArray[0])+NumDpEp(DepartmentArray[1])+NumDpEp(DepartmentArray[2])+NumDpEp(DepartmentArray[3]);
     
    let sumTotalSalary =document.createElement("td")
    footer.appendChild(sumTotalSalary)
    sumTotalSalary.textContent= localStorage.getItem("SumtotalSalary")
    let sumAverageSalary =document.createElement("td")
    footer.appendChild(sumAverageSalary)
    sumAverageSalary.textContent=localStorage.getItem("sumAverageSalary")
  }
}
renderTable()
  function NumDpEp(nameDepartment) {
   
  let contAdministration = 0;
  let contMarketing = 0;
  let contDevelopment = 0;
  let contFinance = 0;
  for (let i = 0; i < arrData.length; i++) {
      let item = arrData[i];
   
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


