// Parte 1

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 },
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
// }

// console.log('O player se chama ' + player.name + ' ' + player.lastName + ' e tem ' + player.age + ' anos de idade.');

// console.log(player.bestInTheWorld);

// Parte 2

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for( let index in names){
//     console.log('Olá ', names[index]);
//   }

// Parte 3

//   let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for( let index in car){
//     console.log(index,': ', car[index]);
//   }

// Parte 1 refazendo
// function operacoesMatematicas (a, b){

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// }
// operacoesMatematicas(1 , 2)

// Parte 2 e 3 refazendo

// function maiorValor (c, d, e){

//     if (c > d && c > e) {
//     console.log(c);
// } else if (d > c && d > e) { console.log(d); }
// else { console.log(e); }
// }

// maiorValor (15, 25, 10)

// Parte 4 refazendo

// function identificadorDeNumero (f){

// if (f > 0) {
//     console.log('Positive');
// }else if (f < 0) {
//     console.log('Negative');
// }else {
//     console.log('Zero');
// }
// }

// identificadorDeNumero (10)

// Parte 5 refazendo

function ehUmTriangulo (t1, t2, t3){

if (t1>0 && t2>0 && t3>0 && (t1+t2+t3)>180) {
    console.log(false);
}else if(t1>0 && t2>0 && t3>0 && (t1+t2+t3)<=180){
    console.log(true);
}else {
    console.log('Valores invalidos');
}
}

ehUmTriangulo( 10, 25, 80)