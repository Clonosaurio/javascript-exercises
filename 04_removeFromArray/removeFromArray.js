const removeFromArray = function(arr, ...rem) {
    let newArray = arr;

    //replacing coincidences with null
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < rem.length; j++){
                if(arr[i] === rem[j]){
                newArray[i]=null;
                }
            }
        }

    //removing null
    let withoutNull = [];
    newArray.forEach(elem => {
        if(elem != null){
            withoutNull.push(elem);
        }
    });

    return withoutNull;
};

// Do not edit below this line
module.exports = removeFromArray;
