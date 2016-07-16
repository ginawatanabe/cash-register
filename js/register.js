window.onload = function() {
  var display = document.getElementById('display');
  var button1 = document.getElementById('1');
  var button2 = document.getElementById('2');
  var button3 = document.getElementById('3');
  var button4 = document.getElementById('4');
  var button5 = document.getElementById('5');
  var button6 = document.getElementById('6');
  var button7 = document.getElementById('7');
  var button8 = document.getElementById('8');
  var button9 = document.getElementById('9');
  var button0 = document.getElementById('0');
  var plus = document.getElementById('add');
  var minus = document.getElementById('subtract');
  var multiply = document.getElementById('multiply');
  var divide = document.getElementById('divide');
  var equals = document.getElementById('total');
  var clear = document.getElementById('clear');
  var newArray = [];

button1.onclick = function() {
  newArray.push(1);
  display.innerHTML = newArray;
}

button2.onclick = function() {
  newArray.push(2);
  display.innerHTML = newArray;
}

button3.onclick = function() {
  newArray.push(3);
  display.innerHTML = newArray;
}

button4.onclick = function() {
  newArray.push(4);
  display.innerHTML = newArray;
}

button5.onclick = function() {
  newArray.push(5);
  display.innerHTML = newArray;
}

button6.onclick = function() {
  newArray.push(6);
  display.innerHTML = newArray;
}

button7.onclick = function() {
  newArray.push(7);
  display.innerHTML = newArray;
}

button8.onclick = function() {
  newArray.push(8);
  display.innerHTML = newArray;
}

button9.onclick = function() {
  newArray.push(9);
  display.innerHTML = newArray;
}

button0.onclick = function() {
  newArray.push(0);
  display.innerHTML = newArray;
}

plus.onclick = function() {
   newArray.push("+");
   display.innerHTML = newArray;
 }

 minus.onclick = function() {
   newArray.push("-");
   display.innerHTML = newArray;
 }

 multiply.onclick = function() {
   newArray.push("x");
   display.innerHTML = newArray;
 }

 divide.onclick = function() {
   newArray.push("/");
   display.innerHTML = newArray;
 }

}
