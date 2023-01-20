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
        if (number.innerHTML === '+' || number.innerHTML === '-' || number.innerHTML ==='×' || number.innerHTML === '÷') {
            operator = number.innerHTML;
            a = s;
            s= '';
            top.innerHTML = a;
            line.innerHTML = s;
        }
        else if (number.innerHTML === '=') {
            b = s;
            /*function corresponding to operator return answer and add it top line*/
            top.innerHTML = 'answer';
            s='ans';
            line.innerHTML = '';
        }
        else {
            s += number.innerHTML;
            line.innerHTML = s;
        }
    });
});

console.log(a);
console.log(b);
console.log(operator);