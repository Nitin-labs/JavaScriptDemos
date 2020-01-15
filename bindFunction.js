let empDetails=function(empId,designation){
    return empId+" "+this.firstName+" "+this.lastName+" "+designation+"<br>"
}
let emp1={
    firstName: "NiKhil",
    lastName: "Khatod"
}
let showEmp=empDetails.bind(emp1,1005,"DBA") //binds function to calling function before execution of called function

document.write(showEmp())