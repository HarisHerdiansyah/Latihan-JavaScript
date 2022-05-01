const container = document.querySelector('.container');
const num = document.getElementById('num');
let i = 0;

container.addEventListener('click', e => {
    if (e.target.getAttribute('id') === 'plus') {
        i++;
        if (i > 0) num.style.color = 'green';
        num.innerHTML = i;
    }
    if (e.target.getAttribute('id') === 'minus') {
        i--;
        if (i < 0) num.style.color = 'red';
        num.innerHTML = i;
    }
    if (e.target.getAttribute('id') === 'reset') {
        i = 0;
        num.innerHTML = i;
    }
    
    if (i === 0) num.style.color = 'black';
});