var calcButtons = document.getElementsByClassName('calc-btn');
var inputPanel = document.getElementById('input-screen');

for(var i = 0; i < calcButtons.length; i++) {
  var calcButton = calcButtons[i];
  calcButton.addEventListener('click', function() {
    console.log(this.innerText);
    if(this.innerText === '=') {
      finalResult();
    } else if(this.innerText === 'CLEAR'){
      clear();
    }  else {
        inputPanel.innerHTML += this.innerText;
      }
  });
}

function finalResult() {
  inputPanel.innerHTML = eval(inputPanel.innerHTML);
  if(inputPanel.innerHTML === 'Infinity') {
    alert("Can't divide by 0! Try again!");
    clear();
  }
}

function clear() {
  inputPanel.innerHTML = '';
}

function getName() {
  var name = prompt('Hello! What is your name?');
  if(name === null || name === '') {
    alert('Please put a valid name');
    getName();
  } else {
    var welcome = document.getElementById('welcome');
    console.log(welcome.innerText);
    welcome.innerText = 'Welcome ' + name + '!';
  }
}

getName();
