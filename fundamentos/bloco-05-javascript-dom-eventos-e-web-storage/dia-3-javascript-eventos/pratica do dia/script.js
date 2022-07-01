function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

const listaUl = document.getElementById('days');

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < decemberDaysList.length; index += 1) {
    const newDay = document.createElement('li');
    newDay.innerHTML = decemberDaysList[index];
    newDay.className = 'day';

    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31) {
        newDay.classList.add('holiday');
    }

    if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25) {
        newDay.classList.add('friday');
    }

    listaUl.appendChild(newDay);
}

function criarBotao() {
    const divPai = document.getElementsByClassName('buttons-container');
    const novoBotao = document.createElement('button');
    novoBotao.innerText = 'Feriados';
    novoBotao.id = 'btn-holiday';
    divPai[0].appendChild(novoBotao);
}

criarBotao();

const novoBotao = document.getElementById('btn-holiday');

novoBotao.addEventListener('click', function () {
    const feriados = document.getElementsByClassName('holiday');
    for (let index = 0; index < feriados.length; index += 1) {
        if (feriados[index].style.backgroundColor === 'green') {
            feriados[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            feriados[index].style.backgroundColor = 'green';
        }
    }
})

listaUl.addEventListener('mouseover', aumentar);
listaUl.addEventListener('mouseout', retornar);

function aumentar(event) {
    event.target.style.fontSize = '40px';
}

function retornar(event){
    event.target.style.fontSize = '20px';
}
