// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Bem vinda, ', info.personagem);

// Parte 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

// info.recorrente = 'Sim';
//outra opção -> info['recorrente'] = 'Sim';

// console.log(info)

// Parte 3 - Faça um for/in que mostre todas as chaves do objeto. 

// for(key in info){
//     console.log(key);
// }

// Parte 4 - Faça um for/in que mostre todas as chaves do objeto. 

// for(key in info){
//     console.log(info[key]);
// }

// Parte 5

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

// for(nick in info){
//     if(info[nick] !== info2[nick]){
//         console.log(info[nick]+' e '+info2[nick])
//     }else{
//         console.log('Ambos '+nick+'s')
//     }
// }
// console.log(info.personagem = info.personagem+' e '+'novo');

//////////////////////////////////////////////////////////////////

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//   console.log('O livro favorito de '+leitor.nome+' '+leitor.sobrenome+' se chama '+"'"+ leitor.livrosFavoritos[0].titulo);

 leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })

  console.log(leitor.livrosFavoritos);

  // Parte 8
  
  console.log('Julia tem '+leitor.livrosFavoritos.length+" livros favoritos");