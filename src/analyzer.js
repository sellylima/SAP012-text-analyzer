const analyzer = {
  //esta função deve retornar a contagem de palavras encontradas no parâmetro `text` do tipo `string`. //calcular a contagem de palavras de um texto.
  getWordCount: (text) => {
    const words = text.split(" ");
    return words.length;
  },

  getCharacterCount: (text) => {
    //Esta função deve retornar a contagem de caracteres encontrados no parâmetro `text` do tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    // esta função deve retornar a contagem de caracteres excluindo espaços e sinais de pontuação encontrados no parâmetro `text` do tipo `string`.
    const words = text.split(" ");
    const stringSemEspaco = words.join("");
    return stringSemEspaco.length;
  },

  getAverageWordLength: (text) => {
    //TODO: Esta função deve retornar o comprimento médio das palavras encontradas no parâmetro `text` do tipo `string`.
    const words = text.split(/\s+/);
    let totalWords = 0;
    for (let i = 0; i < words.length; i++) totalWords += words[i].length;
    return parseFloat((totalWords / words.length).toFixed(2));
  },

  getNumberCount: (text) => {
    // Esta função deve retornar quantos números estão no parâmetro `text` do tipo `string`. 
    //const somaNumeros = text.match(/\d+/g);
    return somaNumeros ? somaNumeros.length : 0;
  },

  getNumberSum: (text) => {
    //Esta função deve retornar a soma de todos os números encontrados no parâmetro `text` do tipo `string`.
    const somaNumeros = text.match(/\d+/g);
    if (somaNumeros) {
      const sum = somaNumeros.reduce((acc, num) => acc + parseInt(num, 10), 0);
      return sum;
    } else {
      return 0;
    }
  },
};

export default analyzer;
