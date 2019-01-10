var oper, a, b, res;
var inp;
var his;
var numbers;


document.addEventListener('DOMContentLoaded', () => {
  inp = document.getElementById('main');
  his = document.getElementById('history');
  numbers = document.querySelectorAll('.numerals .button');
  numbers = Array.prototype.slice.call(numbers);
  numbers.forEach(element => {
    element.addEventListener('click', () => addLetter(element.innerText));
  });
});

function addLetter(a) {
  inp.value += a;
} 

function clearInp() {
  inp.value = '';
}

function plus(a, b) {
  return +a + +b;
}

function minus(a, b) {
  return +a - +b;
}

function dividing(a, b) {
  return +a / +b;
}

function mult(a, b) {
  return +a * +b;
}

function mod(a, b) {
  return +a % +b;
}

function result() {
  b = +inp.value;
  if(!oper) {
    his.innerHTML += `=${+inp.value} <br>`;
  } else {
    res = oper(a, b);
    his.innerHTML += `${b} = ${res} <br>`;
    inp.value = res + '';
  }
  a = b = oper = null;
  res = null;
}

function act(opera, letter) {
  a = +inp.value;
  his.innerHTML += `${a} ${letter} `;
  inp.value = '';
  switch (opera) {
    case 'minus' :
      oper = minus;
    break;
    case 'plus' :
      oper = plus;
    break;
    case 'dividing' :
      oper = dividing;
    break;
    case 'mult' :
      oper = mult;
    break;
    case 'mod' :
      oper = mod;
    break;
  }
}

