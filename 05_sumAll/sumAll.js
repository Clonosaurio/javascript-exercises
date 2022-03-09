const sumAll = function(start, finish) {
    let sum = 0;
    
    if(start < 0 || finish < 0 || typeof(start) != "number" || typeof(finish) != "number"){
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

// Do not edit below this line
module.exports = sumAll;
