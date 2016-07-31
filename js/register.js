window.onload = function() {
  var num1 = document.getElementById('display1');
  var num2 = document.getElementById('display2');
  var num3 = document.getElementById('display3');
  var num4 = document.getElementById('display4');
  var num5 = document.getElementById('display5');

  var button = document.querySelectorAll('button');
  var equals = document.getElementById('total');
  var clear = document.getElementById('clear');
  var newArray = [];

  for (i=0; i<button.length; i++) {
      button[i].onclick = function() {
      newArray.push(this.id);
      display.innerHTML = newArray.join('');
      console.log(newArray);
    }
  }

 clear.onclick = function() {
      newArray.length = 0;
      newArray.push(0)
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
          var leftside = Number(left.join(''));
          var rightside = Number(right.join(''));
          console.log(leftside, rightside);

          switch(newArray[index]) {
            case '+': display.innerHTML = leftside + rightside;
            break;
            case '-': display.innerHTMl = leftside - rightside;
            break;
            case 'x': display.innerHTML = leftside * rightside;
            break;
            case '/': display.innerHTML = leftside / rightside;
            break;
            default: display.innerHTML = "Error";
            }
          }
        })}
      }
