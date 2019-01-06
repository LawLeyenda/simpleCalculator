var displayVal = '0';
var pendingVal;
var evalStringArray = []; // '5 + 5'

var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var buttonThree = document.getElementById("button3");
var buttonFour = document.getElementById("button4");
var buttonFive = document.getElementById("button5");
var buttonSix = document.getElementById("button6");
var buttonSeven = document.getElementById("button7");
var buttonEight = document.getElementById("button8");
var buttonNine = document.getElementById("button9");

var clearBtn = document.getElementById("reset");
var displayValElement = document.getElementById("numbers");

var calcNumBtns = document.getElementsByClassName('digits');
var calcOperatorBtns = document.getElementsByClassName('operators');

var performOperation = (clickObj) => {
    var operation = clickObj.target.innerText;

    switch(operation) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case 'X':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '/':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayVal);
            var evalution = eval(evalStringArray.join(' '));
            displayValElement.innerText = evalution;
            evalStringArray = [];
            break;
        default:
            return null;
    }
}


for(let i = 0; i < calcOperatorBtns.length; i++){
   calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if(displayVal === '0')
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;    
}

for(let i = 0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
} 
clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}

