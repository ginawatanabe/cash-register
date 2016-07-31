window.onload = function() {
  var num1 = document.getElementById('display1');
  var num2 = document.getElementById('display2');
  var num3 = document.getElementById('display3');
  var num4 = document.getElementById('display4');
  var num5 = document.getElementById('display5');

  var ops = document.querySelectorAll('.ops');
  var button = document.querySelectorAll('.number');
  var equals = document.getElementById('total');
  var clear = document.getElementById('.');
  var memory1 = '';
  var memory2 = '';

  function startmemory1() {
    for (i=0; i<button.length; i++) {
        button[i].onclick = function() {
        if (num1.innerHTML === '') {
          memory1 = '';
          memory1 = this.id;
          num1.innerHTML = memory1;
      } else if (num1.innerHTML !== '') {
          num2.innerHTML = this.id;
          memory1 = num1.innerHTML.concat(num2.innerHTML);
          num1.innerHTML = memory1;
          console.log(memory1);
      }
     }
    }
   }
startmemory1();
}
