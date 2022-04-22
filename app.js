let fullEmployee =[]

function Employee(employeeID,fullName,Department,Level,imageURL){

    this.employeeID=employeeID
    this.fullName=fullName
    this.Department=Department
    this.Level=Level
    this.imageURL=imageURL
    fullEmployee.push(this)
}
let Ghazi =new Employee(1000,"Ghazi Samer","Administration","Senior")
let Lana = new Employee(1001,"Lana Ali","Finance","Senior")
let Tamara = new Employee(1002,"Tamara Ayoub","Marketing","Senior")
let Safi =new Employee(1003,"Safi Walid","Administration","Mid-Senior")
let Omar=new Employee(1004,"Omar Zaid","Development","Senior")
let Rana = new Employee(1005,"Rana Saleh","Development","Junior")
let Hadi = new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior")

Employee.prototype.Salary=function () {
    let max=0
    let min=0
    if(this.Level=="Senior"){
        max=2000
        min=1500

    }else if(this.Level=="Mid-Senior"){
         min=1000
         max=1500
    }else if(this.Level=="Junior"){
         min= 500
         max=1000

    }
    
    return Math.floor(Math.random()*(max-min))+min
}
/*fullEmployee.Salary()*/

Employee.prototype.netSalary=function(){
     let tax = this.Salary() *0.075
     let Ns = this.Salary()-tax
     return Ns
}


Employee.prototype.render=function(){
    for (i=0;i<fullEmployee.length;i++){
        let item =fullEmployee[i]


        document.write(`<p>${item.fullName} has a salary of  ${item.netSalary()} </p>`)
    }

    
       
        
    }
    

Ghazi.render()



