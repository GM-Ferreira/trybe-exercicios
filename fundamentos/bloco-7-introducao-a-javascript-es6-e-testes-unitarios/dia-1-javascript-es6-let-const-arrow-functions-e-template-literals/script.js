const contador = document.getElementById('contador');
const botao = document.getElementById('clickbtn');

///////// Parte 1 //////////////

// const testingScope = (escopo) => {
//     if (escopo === false) {
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//         console.log(ifScope);
//     } else {
//         const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//         console.log(elseScope);
//     }
// }

// testingScope(true);

///////// Parte 1.2 ///////////

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort(function(a, b){return a - b});

// console.log(`Os números ${oddsAndEvens} se encontram em ordem crescente!`); // será necessário alterar essa linha 😉

///// Parte 2 ////////// Retorno o Fatorial

// const fatorial = (numero) => {
//     let contador = 1;
//     for (let index = 1; index <= numero; index += 1) {
//         contador *= index;
//     }
//     console.log(`O valor do fatorial de ${numero} é ${contador}`);
// }

// fatorial(6);

///// Parte 2.2 ////////// maior palavra

// const encontreMaior = (longestWord) => {
//     const separado = longestWord.split(' ');
//     let palavra = separado[0];
//     for (let i = 0; i < separado.length; i += 1) {
//         if (palavra.length < separado[i].length) {
//             palavra = separado[i];
//         };
//     }
//     console.log(palavra);
// }

// encontreMaior('Antônio foi no banheiro e não sabemos o que aconteceu');

////// Parte 2.3 ////// contador de clicks
let numero = 0;

botao.addEventListener('click', acionado = () => {  
    numero += 1;
    contador.innerText = `Quantidade de clicks: ${numero}`
    console.log(' ');
})
