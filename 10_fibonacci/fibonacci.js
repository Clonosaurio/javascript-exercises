const fibonacci = function(n) {
    //feels too basic, maybe I missed the point and skipped something
    //I don't know which advanced methods I should use here
    if(n < 0){
        return "OOPS";
    };
    let sequence = [1,1];
    for(let i=0; i < n-2; i++){
      let length = sequence.length;
        sequence.push( parseInt(sequence[length-1] + sequence[length-2]));
    };
    return sequence[sequence.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
