var dice = {
  sides: 3,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    // if ( number === 1) {

    // }
    // else if ( number === 2) {

    // }
    // else {

    // }
    return randomNumber;
  }
}

var diceTwo = {
    sides: 3,
    rollTwo: function () {
      var randomNumber = Math.ceil(Math.random() * this.sides) + 2;
      // if ( number === 1) {
  
      // }
      // else if ( number === 2) {
  
      // }
      // else {
  
      // }
      return randomNumber;
    }
  }



//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

function printNumberTwo(number) {
    var placeholder = document.getElementById('placeholderTwo');
    placeholder.innerHTML = number;
  }

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
//   var resultTwo = diceTwo.roll();
//   printNumberTwo(resultTwo);
};




