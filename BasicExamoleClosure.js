function showEmployeeSalary(empName,salary){
    var showSalary="Employee Salary is: "
    function displaySalary(){
        return showSalary+empName+" gets Rs."+salary
    }
return displaySalary()
}
document.write(showEmployeeSalary("Saumya",50000))