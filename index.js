var x = 500;
    var flashStep = 1;
    var myInterval;
    var randomColor = "#3160e9";

function change() { 
var col = '#' + (Math.random().toString(16) + '000000').slice(2, 8);
  randomColor = col;
  console.log(col);
}

function flash() {
  if (flashStep == 1) {
    document.bgColor = randomColor;
    flashStep = 2;
  } else {
    document.bgColor = "263238";
    flashStep = 1;
  }
}

function faster() {
  window.clearInterval(myInterval);
  myInterval = window.setInterval(flash, x -= 25);
}

function slower() {
  window.clearInterval(myInterval);
  myInterval = window.setInterval(flash, x += 25);
}

myInterval = window.setInterval(flash, x);