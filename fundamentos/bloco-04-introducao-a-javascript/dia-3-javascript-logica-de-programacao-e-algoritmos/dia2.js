// Exercicio 1 

// let fatorial = 10;
// let resultado = 1;

// for(i = fatorial; i!== 0 ;i -=1){
// resultado *= i;
// }
// console.log(resultado);

// Exercicio 2

// let word = 'tryber';
// let invertido = [];

// for(index = 0; index < word.length; index +=1){
// invertido.unshift(word[index]);
// }
// console.log(invertido);

// Exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];

for (let index=1; index < array.length; index += 1){
        if (array[index].length < maior.length) { // inverter < e >
            maior = array[index]
        }
}
console.log(maior);