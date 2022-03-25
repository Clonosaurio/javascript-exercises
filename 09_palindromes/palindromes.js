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

/* //better code from "solution" branch
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};
*/

// Do not edit below this line
module.exports = palindromes;
