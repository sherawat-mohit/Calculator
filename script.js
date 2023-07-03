// getting elements
var screenhistory = document.getElementById("history");
var screentemp = document.getElementById("temp");
var allclear = document.getElementById('allclear');
var backspace = document.getElementById('backspace');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var percentage = document.getElementById('percentage');
var result = document.getElementById('result');
var dot = document.getElementById('dot');
var darkmode = document.getElementById('darkmode');
var mycss = document.getElementById('mycss');

var nine = document.getElementById('nine');
var eight = document.getElementById('eight');
var seven = document.getElementById('seven');
var six = document.getElementById('six');
var five = document.getElementById('five');
var four = document.getElementById('four');
var three = document.getElementById('three');
var two = document.getElementById('two');
var one = document.getElementById('one');
var zero = document.getElementById('zero');


var operand1 = '0';
var operator = '';
var operand2 = '';
var temp = '';

// Event listeners
allclear.addEventListener('click',function(){
    console.log("allclear");
    operand1 = '0';
    temp = '0';
    printscr();
});

backspace.addEventListener('click',function(){
    if(temp.length<=1){
        temp = '0';
        printscr();
        return; 
    }
    console.log("backspace");
    temp = temp.substring(0,temp.length-1);
    console.log(temp);
    printscr();
});

divide.addEventListener('click',function(){
    console.log("divide");
    operand1 = temp;
    operator = '/';
    temp = '0';
    printscr();
});

multiply.addEventListener('click',function(){
    console.log("multiply");
    operand1 = temp;
    operator = '*';
    temp = '0';
    printscr();
});

percentage.addEventListener('click',function(){
    console.log("percentage");
    operand1 = temp;
    operator = '%';
    temp = '0';
    printscr();
});

minus.addEventListener('click',function(){
    console.log("minus");
    operand1 = temp;
    operator = '-';
    temp = '0';
    printscr();
});

plus.addEventListener('click',function(){
    console.log("plus");
    operand1 = temp;
    operator = '+';
    temp = '0';
    printscr();
});

result.addEventListener('click',function(){
    console.log("result");
    operand2 = temp;
    temp = eval(operand1 + operator + operand2);
    temp = temp.toFixed(2);
    console.log(operand1);
    console.log(operand2);
    console.log(temp);
    operand1 = operand2;
    printscr();
});

darkmode.addEventListener('click',function(){
    console.log("darkmode");
    if(darkmode.getAttribute('src')=='sun.svg'){
        darkmode.setAttribute('src','moon.svg');
        mycss.setAttribute('href','dark-style.css');
    }else{
        darkmode.setAttribute('src','sun.svg');
        mycss.setAttribute('href','light-style.css');

    }
});

dot.addEventListener('click',function(){
    console.log("dot");
    temp = temp + '.';
    printscr();
});

zero.addEventListener('click',function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }
    console.log('zero');
    temp = temp + '0';
    printscr();
});

nine.addEventListener('click',function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }

    console.log('nine');
    temp = temp + '9';
    printscr();
});

eight.addEventListener('click',function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }
    console.log('eight');
    temp = temp + '8';
    printscr();
});

seven.addEventListener('click',function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }
    console.log('seven');
    temp = temp + '7';
    printscr();
});

six.addEventListener('click',function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }
    console.log('six');
    temp = temp + '6';
    printscr();
});

five.addEventListener('click',function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }
    console.log('five');
    temp = temp + '5';
    printscr();
});

four.addEventListener('click',function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }
    console.log('four');
    temp = temp + '4';
    printscr();
});

three.addEventListener('click', function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }
    console.log('three');
    temp = temp + '3';
    printscr();
})

two.addEventListener('click',function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }
    console.log('two');
    temp = temp + '2';
    printscr();
});

one.addEventListener('click',function(){
    if(temp.length>10){
        return;
    }
    if(temp==0){
        temp='';
    }
    console.log("one");
    temp = temp + '1';
    printscr();
});



// Printing on screen

function printscr(){
    if(temp.length>10){
        temp = temp.substring(0,11);
    }
    screenhistory.innerText = operand1;
    screentemp.innerText = temp;
}