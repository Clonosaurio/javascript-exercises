const sumAll = function(start, finish) {
    let sum = 0;
    
    if(isInvalidNumber(start, finish)){
        return "ERROR";
    }else if(start < finish){
        for(let i = start; i <= finish; i++){
            sum += i;
        }
    }else{
        for(let i = finish; i <= start; i++){
            sum += i;
        }
    }

    return sum;
};

function isInvalidNumber(...num){
    let invalid = false;
    num.forEach(n => {
        if(n < 0 || typeof(n) != "number"){
            invalid = true;
        }
    });
    return invalid;
}

// Do not edit below this line
module.exports = sumAll;
