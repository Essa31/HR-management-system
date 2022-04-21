let fullEmployee=[]

function Employee(employeeID,fullName,Department,Level,imageURL){

    this.employeeID=employeeID
    this.fullName=fullName
    this.Department=Department
    this.Level=Level
    this.imageURL=imageURL
    fullEmployee.push(this)
}
let Ghazi =new Employee(1000,"Ghazi Samer","Administration","Senior",)
let Lana = new Employee(1001,"Lana Ali","Finance","Senior")
let Tamara = new Employee(1002,"Tamara Ayoub","Marketing","Senior")
let Safi =new Employee(1003,"Safi Walid","Administration","Mid-Senior")
let Omar=new Employee(1004,"Omar Zaid","Development","Senior")
let Rana = new Employee(1005,"Rana Saleh","Development","Junior")
let Hadi = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior")
Employee.prototype.Salary=function () {
    if(this.Level=="Senior"){
           let max=2000
           let min=1500

    }else if(this.Level=="Mid-Senior"){
        let min=1000
        let max=1500
    }else if(this.Level=="Junior"){
        let min= 500
        let max=1000

    }
    
    return Math.floor(Math.random()*(max-min))+min;
}
Employee.prototype.netSalary=function(){
     let tax = this.Salary *0.075
     let netSalary = this.Salary-tax
     return netSalary
}
Employee.prototype.render=function(){
    
    document.write(`<p>${this.fullName} has a salary of ${this.Salary}</p>`)
}




    