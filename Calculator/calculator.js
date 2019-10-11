//Calculator
var a,b,result, operation,display,ce;

function setValues(){
    a = Number(document.getElementById('a').value);
    b = Number(document.getElementById('b').value);
    display = document.getElementById('val');
    operation = document.getElementById('calcOper').value;
}

function sum(){
    setValues();
    result = a+b;
    display.textContent = result;
}
function minus(){
    setValues();
    result = a-b;
    display.textContent = result;
}
function multi(){
    setValues();
    result = a*b;
    display.textContent = result;
}
function div(){
    setValues();
    result = a/b;
    display.textContent = result;
}
function remaindr(){
    setValues();
    result = a%b;
    display.textContent = result;
}
function avg(){
    setValues();
    result = (a+b)/2;
    display.textContent = result;
}
//clear;
ce = document.getElementById('clear');
ce.onclick = function(){
    document.getElementById('val').innerHTML = "";
    document.getElementById('a').value = "";
    document.getElementById('b').value = "";
}
function calc(){
    setValues();
    if(operation === "0"){
        sum();
    }
    if(operation === "1"){
        minus();
    }
    if(operation === "2"){
        multi();
    }
    if(operation === "3"){
        div();
    }
    if(operation === "4"){
        remaindr();
    }
    if(operation === "5"){
        avg();
    }
}

//Average Calculator
var btnCalcAvg = document.getElementById('numbtn');
var btnclearAvg = document.getElementById('clearAvg');
var num;
var arrNum = [];
var avgNum;
var sumNum = 0;
btnCalcAvg.onclick = function(){
    var num = document.getElementById('n1').value;
    var arrDis = document.getElementById("arrDis");
    var dis = document.getElementById("avg");
    arrNum.push(parseFloat(num));
    arrDis.innerHTML += num + ' , ';
    sumNum += parseFloat(num);
    avgNum = parseFloat(parseFloat(sumNum) / arrNum.length);
    dis.innerHTML = 'Average: ' + avgNum;
}

btnclearAvg.onclick = function(){
    num = 0;
    sumNum = 0;
    avgNum = 0;
    arrNum = [];
    document.getElementById('n1').value = "";
    document.getElementById("arrDis").innerHTML = "Numbers: ";
    document.getElementById("avg").innerHTML = "Average: ";
}