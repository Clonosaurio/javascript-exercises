const reverseString = function(str) {
    let reversed = "";
    for(let i = 0; i < str.length; i++){
        reversed = str[i]+reversed;
    };
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
