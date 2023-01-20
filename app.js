const display = document.querySelector('.display');

let s='';
let a='';
let b='';
let operator='';
const numbers = document.querySelectorAll('#number');
numbers.forEach((number) => {
    number.addEventListener('click', ()=>{
        const top = document.querySelector('.top-line');
        const line = document.querySelector('.bottom-line');
        if ((number.innerHTML === '+' || number.innerHTML === '-' || 
            number.innerHTML ==='×' || number.innerHTML === '÷') 
            && top.innerHTML==='') {
            a = s;
            s= '';
            operator = number.innerHTML;
        }
        else if ((number.innerHTML === '+' || number.innerHTML === '-' || 
        number.innerHTML ==='×' || number.innerHTML === '÷') 
        && top.innerHTML!=='' && a === '') {
            a = top.innerHTML;
            operator = number.innerHTML;
            s = '';
        }
        else if ((number.innerHTML === '+' || number.innerHTML === '-' || 
        number.innerHTML ==='×' || number.innerHTML === '÷') 
        && top.innerHTML!=='' && a !== '') {
            b = s;
            top.innerHTML = doMath(a,b,operator);
            line.innerHTML = '';
            a,b = '';
        }
        else if (number.innerHTML === '=') {
            b = s;
            top.innerHTML = doMath(a,b,operator);
            line.innerHTML = '';
            a,b = '';
        }
        else {
            s += number.innerHTML;
            line.innerHTML = s;
        }
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