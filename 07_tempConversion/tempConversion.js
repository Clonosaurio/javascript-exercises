const ftoc = function(fah) {
  let cel = ((fah-32)*5)/9;

  if(cel == Math.floor(cel)){
    return cel;
  }else{
    return parseFloat(cel.toFixed(1));
  }
};

const ctof = function(cel) {
  let fah = (cel*9/5)+32;

  if(fah == Math.floor(fah)){
    return fah;
  }else{
    return parseFloat(fah.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
