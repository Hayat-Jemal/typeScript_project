//unkown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    //unknown type it doesn't work with out if statment
    userName = userInput;
}



//never type
//it doesn't return
function generateError(message: string, code: number):never {
    throw {
        message: message,
        errorCode:code,
    }
}
generateError("An error occured", 500);
