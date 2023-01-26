let s='';
let firstOperand='';
let secondOperand='';
let operator='';
let hasAnsStored = false;
let answer = '';

const numbers = document.querySelectorAll('#number');

numbers.forEach((number) => {
    number.addEventListener('click', ()=>{
        //2 line display
        //top is top line of display
        const top = document.querySelector('.top-line');
        //bottom is bottom line of display
        const bottom = document.querySelector('.bottom-line');
        //operator displays current operator on left side of display
        const operation = document.querySelector('.operation');
        //x(+,-,*,/)
        if ((number.innerHTML ==='×' || number.innerHTML === '÷')
        && firstOperand === '' && s ==='') {
            //alert a reset to initial state and run ac function
            alert("Reset to initial state")
            ac();
        }
        else if ((number.innerHTML === '+' || number.innerHTML === '-' || 
            number.innerHTML ==='×' || number.innerHTML === '÷') 
            && firstOperand ==='' && !hasAnsStored) {
            firstOperand = s;
            bottom.innerHTML = '';
            top.innerHTML = firstOperand;
            s= '';
            operator = number.innerHTML;
            operation.innerHTML = operator;
        }
        //ans(+,-,*,/)
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
        else if ((number.innerHTML === '+' ||  number.innerHTML ==='×' || 
        number.innerHTML === '÷') && operator !== '') {
            alert("multiple operators can not be used simultaneously");
            ac();
        } 
        //x(+,-,*,/)y(+,-,*,/)
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
        else if (number.innerHTML === '=' && s === '0') {
            alert("Why U try to make me do these pointless things?");
        }
        //x(+,-,*,/)y=
        else if (number.innerHTML === '=' && firstOperand !== '' && operator !== '' && s !== '') {
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
        else if (number.innerHTML === 'clear') {
            ac();
        }
        else if (number.innerHTML === 'backspace' && !hasAnsStored) {
            s = s.slice(0, -1);
            bottom.innerHTML = s;
        }
        else if (number.innerHTML === 'backspace' && hasAnsStored) {
            answer = answer.slice(0, -1);
            top.innerHTML = answer;
            s = top.innerHTML;
        }
        else if (!hasAnsStored && number.innerHTML !== '=') {
            s += number.innerHTML;
            bottom.innerHTML = s;
        }
        else if(hasAnsStored && operator ==='' && number.innerHTML !== '=') {
            hasAnsStored = false;
            answer = '';
            top.innerHTML = '';
            s += number.innerHTML;
            bottom.innerHTML = s;
        }
        else if(hasAnsStored && operator !=='' && number.innerHTML !== '=') {
            hasAnsStored = false;
            answer = '';
            s += number.innerHTML;
            bottom.innerHTML = s;
        }
        //= error alert
        else if (number.innerHTML === '=' && firstOperand === '' &&  operator === '') {
            alert("Enter number before proceeding");
        }
        //x(+,-,*,/)= error alert
        else if (number.innerHTML === '=' && firstOperand !== '' 
        && operator !== '' && secondOperand === '') {
            alert("Enter number before proceeding");
        }
    });
});

function doMath(a,b,operator) {
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

function ac() {
    s='';
    firstOperand='';
    secondOperand='';
    operator='';
    hasAnsStored = false;
    answer = '';
    //top is top line of display
    const top = document.querySelector('.top-line');
    top.innerHTML = '';
    //bottom is bottom line of display
    const bottom = document.querySelector('.bottom-line');
    bottom.innerHTML = '';
    //operator displays current operator on left side of display
    const operation = document.querySelector('.operation');
    operation.innerHTML = '';
}