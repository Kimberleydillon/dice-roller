var numberOfDice = process.argv.slice(2);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getrandom(result){
  var numberOfRolls = [];
    for ( var i = 0; i < numberOfDice; i++) {
    numberOfRolls[i] = getRandomInt(1, 7);
}
  return numberOfRolls;

}

console.log("Rolled " + numberOfDice + " dice: " + (getrandom(numberOfDice)));

