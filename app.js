//unkown type
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    //unknown type it doesn't work with out if statment
    userName = userInput;
}
//never type
//it doesn't return
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError("An error occured", 500);
