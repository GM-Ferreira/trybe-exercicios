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