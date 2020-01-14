function empId(){
    var empId=625
    return {
        getId:function(){
            return empId
        },
        setId:function(theNewId){
            empId=theNewId
        }
    }
} 
var newEmpId=empId()
document.write("Outer function: "+newEmpId.getId())
newEmpId.setId(305)
document.write("<br>Inner function: "+newEmpId.getId())