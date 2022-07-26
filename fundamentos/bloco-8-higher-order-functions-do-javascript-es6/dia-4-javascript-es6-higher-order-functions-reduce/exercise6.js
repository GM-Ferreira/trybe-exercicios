const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(nomes, notas) {
    const objetoFinal = {};
    const medias = notas.map((array) => (array.reduce((total, nota) => total + nota, 0)) / 5);
    const juntar = nomes.map((nome, index) => (
        {
            name: nome,
            average: medias[index]
        }))
    return juntar;
}

console.log(studentAverage(students, grades));

const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
];