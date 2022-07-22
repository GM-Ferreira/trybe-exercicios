const sum = require('./exercicio.js');

test('soma de 2 e 3 retorna 5', () => {
    expect(sum(2, 3)).toEqual(5);
});

test('soma de 4 e 5 retorna 9', () => {
    expect(sum(4, 5)).toEqual(9);
});

test('soma de 0 e 0 retorna 0', () => {
    expect(sum(0, 0)).toEqual(0);
});

test('soma de 4 e "5" retorna Error', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
});


