let add=function(a,b){
    return a+b
}
let multiply=function(a,b){
    return a*b
}
let calc=function(num1,num2,callBack){
    if(typeof callBack=="function"){
    return callBack(num1,num2)
    }
}
console.log(calc(2,3,add))
document.write(calc(2,3,add))
/* or we can write it as follows
document.write(calc(2,3,function(a,b){
    return a-b
})) */