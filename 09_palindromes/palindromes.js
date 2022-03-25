const palindromes = function (str) {
    let cleanStr = "";
    let reversed = "";
    let excluded = "., !";

     str.split("").map(char => {
        if(!excluded.includes(char)){
            cleanStr += char;
            reversed = char+reversed;
        }
    });
    
    return cleanStr.toLowerCase() == reversed.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
