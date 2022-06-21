// Parte 1

let a = 1;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Parte 2 e 3

let c = 10;
let d = 2;
let e = 26;

if (c > d && c > e) {
    console.log(c);
} else if (d > c && d > e) { console.log(d); }
else { console.log(e); }

// Parte 4 

const f = -2;

if (f > 0) {
    console.log('Positive');
}else if (f < 0) {
    console.log('Negative');
}else {
    console.log('Zero');
}

// Parte 5
const t1 = 20;
const t2 = 15;
const t3 = 10;

if (t1>0 && t2>0 && t3>0 && (t1+t2+t3)>180) {
    console.log(false);
}else if(t1>0 && t2>0 && t3>0 && (t1+t2+t3)<=180){
    console.log(true);
}else {
    console.log('Valores invalidos');
}

// Parte 6
let peca = 'Pele';
let result = peca.toLowerCase()

if (result == 'rei') {
    console.log('Todas direções');
}else if (result == 'rainha') {
    console.log('Todas direções');
}else if (result == 'bispo') {
    console.log('Diagonal');
}else if (result == 'torre') {
    console.log('Vertical e horizontal');
}else if (result == 'cavalo') {
    console.log('em L');
}else if (result == 'peao') {
    console.log('Para frente');
}else {
    console.log('Peça invalida');
}

// Parte 7

let nota = 81;

if (nota >= 90 && nota <= 100) {
    console.log('A');
}else if (nota >= 80 && nota < 90) {
    console.log('B');
}else if (nota >= 70 && nota<80) {
    console.log('C');
}else if (nota >= 60 && nota < 70) {
    console.log('D');
}else if (nota >= 50 && nota < 60) {
    console.log('E');
}else if (nota < 50 && nota > 0) {
    console.log('F');
}else {
console.log('Valor incorreto, verificar');
}

// Parte 8

const v1 = 2;
const v2 = 3;
const v3 = 5;

if ((v1%2)==0 || (v2%2)==0 || (v3%2)==0) {
    console.log(true);
}else {
    console.log(false);
}

// Parte 9

const v4 = 3;
const v5 = 4;
const v6 = 6;

if ((v4%2)!==0 || (v5%2)!==0 || (v6%2)!==0) {
    console.log(true);
}else {
    console.log(false);
}

// Parte 10

const custo = 100;
const venda = 300;
if (custo>0 && venda>0) {
    let lucro = venda-(custo+(custo*0.2));
    console.log(lucro*1000);    
}else{
    console.log('Valores menores que zero, revise');
}

// Parte 11

let salarioBruto = 2500;
let salarioLiquido;
let salarioBase;
let INSS;
let IR;
let parcela;

if (salarioBruto <= 1556.94) {
    INSS = 0.08 * salarioBruto 
    salarioBase = salarioBruto - INSS
}else if (salarioBruto >=1556.95 && salarioBruto <= 2594.92) {
    INSS = 0.09 * salarioBruto
    salarioBase = salarioBruto - INSS
}else if (salarioBruto >=2594.93 && salarioBruto <= 5189.82) {
    INSS = 0.11 * salarioBruto
    salarioBase = salarioBruto - INSS
}else if (salarioBruto >=5189.82) {
    INSS = 570.88
    salarioBase = salarioBruto - INSS
}

if (salarioBase <= 1903.98) {
    IR = 1;
    parcela = 0;
}else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    IR = 0.075
    parcela = 142.80;
}else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    IR = 0.15
    parcela = 354.80
}else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    IR = 0.225
    parcela = 636.13
}else if (salarioBase >= 4664.68) {
    IR = 0.275
    parcela = 869.36
}

salarioLiquido = salarioBase - (salarioBase * IR - parcela);

console.log(salarioLiquido);