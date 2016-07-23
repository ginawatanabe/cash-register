window.onload = function() {
  var display = document.getElementById('display');
  var button = document.querySelectorAll('button');
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

 clear.onclick = function() {
  newArray.length = 0;
  display.innerHTML = newArray;
}

equals.onclick = function() {
  console.log(newArray);

    var operator = ['+', '-', 'x', '/'];
    newArray.forEach(function(element, index){
      if (operator.indexOf(element) > -1){
        console.log(newArray[index]);
        var left = newArray.slice(0, index);
        var right = newArray.slice(index+1);
        console.log(left.join(''), right.join(''));

        if (newArray[index] === "+") {
          console.log(Number(left.join(''))+Number(right.join('')));
          display.innerHTML = Number(left.join('')) + Number(right.join(''));
        }

        if (newArray[index] === "-") {
          console.log(Number(left.join('')) - Number(right.join('')));
          display.innerHTML = Number(left.join('') - Number(right.join('')));
        }

        if (newArray[index] === "x") {
          console.log(Number(left.join('')) - Number(right.join('')));
          display.innerHTML = Number(left.join('')*Number(right.join('')));
        }

        if (newArray[index] === "/") {
          console.log(Number(left.join('')) / Number(right.join('')));
          display.innerHTML = Number(left.join('')/Number(right.join('')));
        }
      }
    })
  }
