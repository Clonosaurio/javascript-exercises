const leapYears = function(year) {
    //year%4==0   -> true
    //year%100==0 -> false
    //but!
    //year%100==0 && year%400==0 -> true

    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return true;
            } else {
                return false;
            }
        }
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
