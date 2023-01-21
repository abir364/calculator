let s='';
let firstOperand='';
let secondOperand='';
let operator='';
let hasAnsStored = false;
let answer = '';

const numbers = document.querySelectorAll('#number');

numbers.forEach((number) => {
    number.addEventListener('click', ()=>{
        const top = document.querySelector('.top-line');
        const bottom = document.querySelector('.bottom-line');
        const operation = document.querySelector('.operation');
        if ((number.innerHTML === '+' || number.innerHTML === '-' || 
            number.innerHTML ==='×' || number.innerHTML === '÷') 
            && firstOperand ==='' && !hasAnsStored) {
            firstOperand = s;
            bottom.innerHTML = '';
            top.innerHTML = firstOperand;
            s= '';
            operator = number.innerHTML;
            operation.innerHTML = operator;
        }
        else if ((number.innerHTML === '+' || number.innerHTML === '-' || 
        number.innerHTML ==='×' || number.innerHTML === '÷') 
        && hasAnsStored) {
            firstOperand = answer;
            operator = number.innerHTML;
            operation.innerHTML = operator;
            top.innerHTML = firstOperand;
            bottom.innerHTML = '';
            s = '';
        }
        else if ((number.innerHTML === '+' || number.innerHTML === '-' || 
        number.innerHTML ==='×' || number.innerHTML === '÷') 
        && firstOperand!=='' && s!=='') {
            secondOperand = s;
            firstOperand = doMath(firstOperand,secondOperand,operator).toString();
            top.innerHTML = firstOperand;
            operator = number.innerHTML;
            operation.innerHTML = operator;
            bottom.innerHTML = '';
            s = '';
        }
        else if (number.innerHTML === '=' && firstOperand !== '' && operator !== '') {
            secondOperand = s;
            answer = doMath(firstOperand,secondOperand,operator).toString();
            hasAnsStored = true;
            top.innerHTML = answer;
            bottom.innerHTML = '';
            operation.innerHTML= '';
            firstOperand = '';
            secondOperand = '';
            s = '';
            operator = '';
        }
        else if (!hasAnsStored && number.innerHTML !== '=') {
            s += number.innerHTML;
            bottom.innerHTML = s;
        }
        else if(hasAnsStored && operator ==='') {
            hasAnsStored = false;
            answer = '';
            top.innerHTML = '';
            s += number.innerHTML;
            bottom.innerHTML = s;
        }
        else if(hasAnsStored && operator !=='') {
            console.log(bottom.innerHTML);
            hasAnsStored = false;
            answer = '';
            s += number.innerHTML;
            bottom.innerHTML = s;
        }
        else if (number.innerHTML === '=' && firstOperand === '' &&  operator === '') {
            alert("Enter number before proceeding");
        }
        /*else if (number.innerHTML === '=' && firstOperand !== '' 
        && operator !== '' && s ==='' && secondOperand === '') {
            alert("Enter number before proceeding"); 
            //this condition is checks bugs i.e '4+='
        }
        else if (number.innerHTML === '=' && top.innerHTML === NaN) {
            //block operations on NaN values
        }*/
    });
});

function doMath(a,b,operator){
    let opA, opB;
    if (a.includes('.')){
        opA = parseFloat(a);
        opB = parseFloat(b);
    }
    else {
        opA = parseInt(a);
        opB = parseInt(b);
    }

    if(operator === '+') {
        return (opA + opB);
    }
    else if(operator === '-') {
        return (opA - opB);
    }
    else if(operator === '×') {
        return (opA * opB);
    }
    else {
        return (opA / opB);
    }
    
}