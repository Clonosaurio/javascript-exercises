const findTheOldest = function(arr) {
    //done without "reduce" function, no idea how to use it in this case
    const sorted = arr.sort((a, b) => {
        let aLived = stillAlive(a);
        let bLived = stillAlive(b);
    return aLived > bLived ? -1: 1;
  });
  return sorted[0];
};

function stillAlive(person){
    const actualYear = new Date().getFullYear();
    return person.yearOfDeath == undefined ? aLived = actualYear - person.yearOfBirth : aLived = person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
