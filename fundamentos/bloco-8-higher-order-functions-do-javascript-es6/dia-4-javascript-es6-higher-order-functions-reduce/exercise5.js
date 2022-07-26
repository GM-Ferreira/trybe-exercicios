const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
    const tudoJunto = array.reduce((final, atual)=> {
        return `${final + atual}`;
      },'')
      const contador = tudoJunto.match(/a/gi);
      return contador.length;
  }

  console.log(containsA(names));