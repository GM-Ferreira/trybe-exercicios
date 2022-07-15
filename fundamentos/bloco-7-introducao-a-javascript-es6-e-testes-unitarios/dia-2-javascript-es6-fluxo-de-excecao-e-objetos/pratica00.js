const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

const adicionar = (newKey, conteudo) => {
    customer[newKey] = conteudo;

    console.log(customer);
}

adicionar('City','Araraquara');