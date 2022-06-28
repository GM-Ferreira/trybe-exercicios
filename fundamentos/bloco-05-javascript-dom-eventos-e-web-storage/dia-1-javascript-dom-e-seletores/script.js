document.querySelectorAll('#header-container')[0].style.backgroundColor = 'green';

document.querySelectorAll(".no-emergency-tasks")[0].style.backgroundColor = 'rgb(255, 183, 0)';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink';

let preto = document.getElementsByTagName('h3');

for (let index = 0; index < preto.length; index += 1) {
    preto.style.backgroundColor = 'black';
}

console.log(preto.length);
// [0].style.backgroundColor = 'black';