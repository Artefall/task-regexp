function isValidPassword(password){
    if(isMoreThan10(password),
    isIncludeHighRegister(password),
    isIncludeLowRegister(password),
    isIncludeNumber(password),
    isIncludeSpecialNumber(password)){
        return true;
    }
    else{
        return false;
    }
}

function isMoreThan10(password){
    return new Promise(function(resolve,reject){
        if(password.match(/\........../)){
            resolve(password);
        } else {
            reject();
            throw new Error("Password is less than 10!");
        }
    });
}

function isIncludeHighRegister(password){
    return new Promise(function(resolve,reject){
        if(password.match(/\[A-Z]/)){
            resolve(password);
        } else {
            reject();
            throw new Error("Password have not High register symbols!");
        }
    });
}

function isIncludeLowRegister(password){
    return new Promise(function(resolve,reject){
        if(password.match(/\[a-z]/)){
            resolve(password);
        } else {
            reject();
            throw new Error("Password have not low register symbols 10!");
        }
    });
}

function isIncludeNumber(password){
    return new Promise(function(resolve,reject){
        if (password.match(/\d/) > 0){
            resolve(password);
        } else {
            reject();
            throw new Error("Password have not a number!");
        }
    });
}

function isIncludeSpecialNumber(password){
    return new Promise(function(resolve,reject){
        if(password.match(/\D/ && /\W/ && /\S/) > 0){
            resolve(password);
        } else {
            reject();
            throw new Error("Password have no special Symbols!");
        }
    });
}

console.log(isValidPassword("Groborano!123"));