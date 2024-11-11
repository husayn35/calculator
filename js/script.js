let num1 = 1;
let num2 = 2;
let num3 = 3;
let num4 = 4;
let num5 = 5;
let num6 = 6;
let num7 = 7;
let num8 = 8;
let num9 = 9;
let num0 = 0;
let res = 0;

document.getElementById("button1").onclick = function () {
  document.getElementById("result").innerHTML += num1;
};
document.getElementById("button2").onclick = function () {
  document.getElementById("result").innerHTML += num2;
};
document.getElementById("button3").onclick = function () {
  document.getElementById("result").innerHTML += num3;
};
document.getElementById("button4").onclick = function () {
  document.getElementById("result").innerHTML += num4;
};
document.getElementById("button5").onclick = function () {
  document.getElementById("result").innerHTML += num5;
};
document.getElementById("button6").onclick = function () {
  document.getElementById("result").innerHTML += num6;
};
document.getElementById("button7").onclick = function () {
  document.getElementById("result").innerHTML += num7;
};
document.getElementById("button8").onclick = function () {
  document.getElementById("result").innerHTML += num8;
};
document.getElementById("button9").onclick = function () {
  document.getElementById("result").innerHTML += num9;
};
document.getElementById("button0").onclick = function () {
  document.getElementById("result").innerHTML += num0;
};
document.getElementById("buttonAc").onclick = function () {
  document.getElementById("result").innerHTML = "";
};
document.getElementById("buttonRoot").onclick = function () {
  document.getElementById("result").innerHTML = "√";
};
document.getElementById("buttonPlus").onclick = function () {
  document.getElementById("result").innerHTML += " + ";
};
document.getElementById("button-").onclick = function () {
  document.getElementById("result").innerHTML += " - ";
};
document.getElementById("buttonN").onclick = function () {
  document.getElementById("result").innerHTML += ".";
};
document.getElementById("buttonX").onclick = function () {
  document.getElementById("result").innerHTML += " × ";
};
document.getElementById("buttonP").onclick = function () {
  document.getElementById("result").innerHTML += " % ";
};
document.getElementById("buttonRes").onclick = function () {
  let expression = document.getElementById("result").innerHTML;
  expression = expression.replace(/ x /g, " * ");
  try {
    res = eval(expression);
    if (res % 2 == 1 || res % 2 == 0) {
      document.getElementById("result").innerHTML = res;
    } else {
      document.getElementById("result").innerHTML = res.toFixed(4);
    }
  } catch (e) {
    document.getElementById("result").innerHTML = "Error";
  }
};
document.getElementById("buttonB").onclick = function () {
  document.getElementById("result").innerHTML += " ÷ ";
};

document.getElementById("button0").onclick = function () {
  let currentResult = document.getElementById("result").innerHTML;

  if (currentResult !== "0") {
    document.getElementById("result").innerHTML += num0;
  }
};
