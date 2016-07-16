window.onLoad () {
  function Button('number','operation') {
    total = 0;
    this.number = number;
    var operation = function() {
      if (this.total
//need to get the number user clicks and put it into the display text
//then perform the operation it wants with that number upon user hitting "Enter"
//then apply it to the previous total
//until they hit clear (loop?)
// if else statements for changing operators?
// or , make an array with the buttons as objects?
// case switch - if onclick a number, or add, or subtract, deploy function
// "pressed" function would display the number or symbol in display tag
// that means there needs to be two function, one to display and one to listen?

    }
  }
//when a person clicks on the number 1, it should display on the display div
//Need an event listener to listen to all the buttons and fire when clicked
document.getElementById('1').addEventListener('click', display());

  var display = function() {
      document.getElementById('display').innerHTML = ();
    }
  }
