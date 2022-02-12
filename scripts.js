let firstNumber = "";
let secondNumber = "";
let operand = "";

function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divid(a,b){return Math.round(a * 1000000 / b) / 1000000;}

function updateDisplay() {
    display.textContent = `${firstNumber} ${operand} ${secondNumber}`;
}

function storeNumber(n){

    if (!operand) {
        if(!firstNumber){firstNumber=n;}
        else{
            if(n==="." && firstNumber.indexOf(".")>-1){return;}
            firstNumber += n;
        }
    }
    else {
        if(!secondNumber){secondNumber=n;}
        else{
            if(n==="." && secondNumber.indexOf(".")>-1){return;}
            secondNumber += n;
        }
    }
    updateDisplay();
}

function backspace(){
    if(operand){operand="";}
    else if(secondNumber){
        secondNumber = secondNumber.toString().slice(0, -1);
    }
    else if (firstNumber){
        firstNumber = firstNumber.toString().slice(0, -1);
    }
    updateDisplay();
}

function clearAll() {
    firstNumber = "";
    secondNumber = "";
    operand = "";
    equationDisplay.textContent = "";
    updateDisplay();
}

function clearEntry() {
    if (secondNumber){
        secondNumber = "";
    }
    else if (firstNumber){
        firstNumber = "";
    }
    updateDisplay();
}

function evaluate() {
    firstNumber = Number(firstNumber);;
    secondNumber = Number(secondNumber);
    let myEval;
    if(!operand){myEval = firstNumber;}
    else if(operand === "+"){myEval = add(firstNumber,secondNumber);}
    else if(operand === "-"){myEval = subtract(firstNumber,secondNumber);}
    else if(operand === "*"){myEval = multiply(firstNumber,secondNumber);}
    else if(operand === "/"){myEval = divid(firstNumber,secondNumber);}
    console.log(`${firstNumber} ${operand} ${secondNumber} = ${myEval}`);
    equationDisplay.textContent = `${firstNumber} ${operand} ${secondNumber} = `
    firstNumber = myEval;
    firstNumber = firstNumber.toString();
    secondNumber = "";
    operand = "";
    updateDisplay();
}

function changeSign() {
    if(secondNumber){
        secondNumber*=-1;
        secondNumber = secondNumber.toString();
    }
    else if(firstNumber){
        firstNumber*=-1;
        firstNumber = firstNumber.toString();
    }
    updateDisplay();
}

function toPercentage() {
    if(secondNumber){
        secondNumber/=100;
        secondNumber = secondNumber.toString();
    }
    else if(firstNumber){
        firstNumber/=100;
        firstNumber = firstNumber.toString();
    }
    updateDisplay();
}

function inverse() {
    if(secondNumber){
        secondNumber = divid(1,secondNumber);
        secondNumber = secondNumber.toString();
    }
    else if(firstNumber){
        firstNumber = divid(1,firstNumber);
        firstNumber = firstNumber.toString();
    }
    updateDisplay();
}

function square() {
    if(secondNumber){
        secondNumber *= secondNumber;
        secondNumber = secondNumber.toString();
    }
    else if(firstNumber){
        firstNumber *= firstNumber;
        firstNumber = firstNumber.toString();
    }
    updateDisplay();
}

function squareRoot() {
    if(secondNumber){
        secondNumber = Math.sqrt(secondNumber);
        secondNumber = secondNumber.toString();
    }
    else if(firstNumber){
        firstNumber = Math.sqrt(firstNumber);
        firstNumber = firstNumber.toString();
    }
    updateDisplay();
}

//Queary for html elements
const page = document.querySelector("#htmlPage");
const display = document.querySelector("#promptDisplay");
const equationDisplay = document.querySelector("#equationDisplay");
const btn_0 = document.querySelector("#btn_0")
const btn_1 = document.querySelector("#btn_1");
const btn_2 = document.querySelector("#btn_2");
const btn_3 = document.querySelector("#btn_3");
const btn_4 = document.querySelector("#btn_4");
const btn_5 = document.querySelector("#btn_5");
const btn_6 = document.querySelector("#btn_6");
const btn_7 = document.querySelector("#btn_7");
const btn_8 = document.querySelector("#btn_8");
const btn_9 = document.querySelector("#btn_9");
const btnAdd = document.querySelector("#btnAdd");
const btnSubtract = document.querySelector("#btnSubtract");
const btnMultiply = document.querySelector("#btnMultiply");
const btnDivid = document.querySelector("#btnDivid");
const btnEval = document.querySelector("#btnEval");
const btnDelete = document.querySelector("#btnDelete");
const btnClearEntry = document.querySelector("#btnClearEntry");
const btnClearAll = document.querySelector("#btnClearAll");
const btnSign = document.querySelector("#btnSign");
const btnDecimal = document.querySelector("#btnDecimal");
const btnPercent = document.querySelector("#btnPercent");
const btnInverse = document.querySelector("#btnInverse");
const btnSquared = document.querySelector("#btnSquared");
const btnSquareRoot = document.querySelector("#btnSquareRoot");

//add page event listeners
page.addEventListener('keydown', function (e) {if(e.key === '0'){storeNumber('0');}});
page.addEventListener('keydown', function (e) {if(e.key === '1'){storeNumber('1');}});
page.addEventListener('keydown', function (e) {if(e.key === '2'){storeNumber('2');}});
page.addEventListener('keydown', function (e) {if(e.key === '3'){storeNumber('3');}});
page.addEventListener('keydown', function (e) {if(e.key === '4'){storeNumber('4');}});
page.addEventListener('keydown', function (e) {if(e.key === '5'){storeNumber('5');}});
page.addEventListener('keydown', function (e) {if(e.key === '6'){storeNumber('6');}});
page.addEventListener('keydown', function (e) {if(e.key === '7'){storeNumber('7');}});
page.addEventListener('keydown', function (e) {if(e.key === '8'){storeNumber('8');}});
page.addEventListener('keydown', function (e) {if(e.key === '9'){storeNumber('9');}});
page.addEventListener('keydown', function (e) {if(e.key === 'Enter'){evaluate()}});
page.addEventListener('keydown', function (e) {if(e.key === 'Backspace'){backspace()}});
page.addEventListener('keydown', function (e) {if(e.key === '%'){toPercentage()}});
page.addEventListener('keydown', function (e) {
    if(e.key === '+'){
        if(firstNumber && operand && secondNumber){evaluate();}
        operand="+";
        updateDisplay();
    }
});
page.addEventListener('keydown', function (e) {
    if(e.key === '-'){
        if(firstNumber && operand && secondNumber){evaluate();}
        operand="-";
        updateDisplay();
    }
});
page.addEventListener('keydown', function (e) {
    if(e.key === '*'){
        if(firstNumber && operand && secondNumber){evaluate();}
        operand="*";
        updateDisplay();
    }
});
page.addEventListener('keydown', function (e) {
    if(e.key === '/'){
        if(firstNumber && operand && secondNumber){evaluate();}
        operand="/";
        updateDisplay();
    }
});
btnPercent.addEventListener("click", toPercentage);
btnInverse.addEventListener("click", inverse);
btnSquared.addEventListener("click", square);
btnSquareRoot.addEventListener("click", squareRoot);
btn_0.addEventListener("click", ()=>storeNumber('0'));
btn_1.addEventListener("click", ()=>storeNumber('1'));
btn_2.addEventListener("click", ()=>storeNumber('2'));
btn_3.addEventListener("click", ()=>storeNumber('3'));
btn_4.addEventListener("click", ()=>storeNumber('4'));
btn_5.addEventListener("click", ()=>storeNumber('5'));
btn_6.addEventListener("click", ()=>storeNumber('6'));
btn_7.addEventListener("click", ()=>storeNumber('7'));
btn_8.addEventListener("click", ()=>storeNumber('8'));
btn_9.addEventListener("click", ()=>storeNumber('9'));
btnDecimal.addEventListener("click", ()=>storeNumber('.'));
btnAdd.addEventListener("click", ()=> {
    if(firstNumber && operand && secondNumber){evaluate();}
    operand="+";
    updateDisplay();
});
btnSubtract.addEventListener("click", ()=> {
    if(firstNumber && operand && secondNumber){evaluate();}
    operand="-";
    updateDisplay();
});
btnMultiply.addEventListener("click", ()=> {
    if(firstNumber && operand && secondNumber){evaluate();}
    operand="*";
    updateDisplay();
});
btnDivid.addEventListener("click", ()=> {
    if(firstNumber && operand && secondNumber){evaluate();}
    operand="/";
    updateDisplay();
});
btnEval.addEventListener("click", evaluate);
btnDelete.addEventListener("click", backspace)
btnClearEntry.addEventListener("click", clearEntry);
btnClearAll.addEventListener("click", clearAll);
btnSign.addEventListener("click", changeSign);

