const botao = document.getElementById('btnSend');
const testando = document.getElementById('teste');
const nomess = document.getElementById('fullname');
const botaoLimpar = document.getElementById('limpar');
const email = document.querySelector('#email');

botao.addEventListener('click', function (event) {
    event.preventDefault();
    testando.innerHTML = nomess.value;
})

botaoLimpar.addEventListener('click', function (event) {
    event.preventDefault();
    nomess.value = "";
    email.value = "";
})