// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg(){

    if (this.errMsg){
        console.log(`Error message  : ${this.errMsg}`);
    }
    else{
        console.log("No error")
    }
};

const obj1={
    errMsg:"Obj 1 ERROR QUIZ FSE"
}
const obj2={
    propertyGiven:"HI"
}

logMsg.call(obj1);
logMsg.call(obj2);
//displays error with name then no error