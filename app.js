let btns = document.getElementsByClassName("val");
let btns_oper = document.getElementsByClassName("oper");
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let resetbtn = document.getElementById("reset");
let equallbtn = document.getElementById("equall");
let floatPoint = document.getElementById("float")
let operation;
let operand;
let num1='';
let num2='';
let result;


function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0){
        return "Invalid Calculation";
    }
    return a / b;
}
function modulo(a,b){
    return a % b;
}



function choose(operator, a, b){
    if (operator == "plus"){
        return add(a,b);
    }else if (operator == "minus"){
        return sub(a,b);
    }else if (operator == "mult"){
        return multiply(a,b);
    }else if (operator == "div"){
        return divide(a,b);
    }else if (operator == "modul"){
        return modulo(a,b);
    }else {
        return "choose a math operation"
    }

}


    
Array.from(btns).forEach(btn => {
  btn.addEventListener('click', event => {
      //console.log(event.target.innerHTML);
      if (isNaN(num1)){
          return
      }
      screen2.innerHTML += event.target.innerHTML;
      if(num1 != '' ){
          num2 = parseFloat(screen2.innerHTML);
      }
   });
})

Array.from(btns_oper).forEach(btn => {
    btn.addEventListener('click', event => {
        
        if (num1 !== '' && num2 !== '') {
            
            result = choose(operation,num1,num2);
            operation = event.target.value;
            num1 = result;
            num2  = '';
            operand = event.target.innerHTML;
            screen1.innerHTML = result + " " + operand;
            screen2.innerHTML = '';
        }
        operation = event.target.value;
        operand = event.target.innerHTML;

        if (num1 === ''){
           
            num1 = parseFloat(screen2.innerHTML);
            screen2.innerHTML = '';
            screen1.innerHTML = num1 + " " + event.target.innerHTML;
        }else if (num1 !== '' && num2 === ''){
            screen1.innerHTML = num1 + " " + operand;
            screen2.innerHTML = '';
        }

        

    })
})

resetbtn.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    screen1.innerHTML = num1;
    screen2.innerHTML = '';
})

equallbtn.addEventListener('click', () => {
    if (num1 !== '' && num2 !== '') {
            
            result = choose(operation,num1,num2);
            
            num1 = result;
            num2  = '';
           
            screen1.innerHTML = ''
            screen2.innerHTML = result;

             
        }
                                          
})

floatPoint.addEventListener('click', () => {
    if (screen2.innerHTML.indexOf('.') == -1){
        screen2.innerHTML = screen2.innerHTML + '.'

    }
    
})