//Program for using named or anonymous functions as Callbacks
var allUserData=[]

function logStuff(userData){
    
    if(typeof userData=='string'){
        console.log(userData)
        document.write(userData)
    }else if(typeof userData=='object'){
        for(var item in userData){
            console.log(item+" : "+userData[item])
            document.write(item+" : "+userData[item]+"<br>")
        }
    }
}
function getInput(options, callback){
    allUserData.push(options)
    //Best practice to make sure callback is a function before executing it
    if(typeof callback=="function"){
        callback(options)
    }
}
getInput({name:"Raghav", speciality: "Front End"},logStuff)