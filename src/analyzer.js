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
    const wordsSemCaracteres = text.replace(/[^a-zA-Z0-9]/g, "");
    const words = wordsSemCaracteres.split(" ");
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
    const somaNumeros = text.match(/\b\d+(\.\d+)?\b/g);
    if (somaNumeros) {
      return somaNumeros.length;
    } else {
      return 0;
    }
  },

  getNumberSum: (text) => {
    //Esta função deve retornar a soma de todos os números encontrados no parâmetro `text` do tipo `string`.
    const somaNumeros = text.match(/\b\d+(\.\d+)?\b/g);
    if (somaNumeros) {
      let sum = 0;
      for (let i = 0; i < somaNumeros.length; i++) {
        sum += Number(somaNumeros[i]);
      }
      return sum;
    } else {
      return 0;
    }
  },
};

export default analyzer;
