const analyzer = {
  //esta função deve retornar a contagem de palavras encontradas no parâmetro `text` do tipo `string`. //calcular a contagem de palavras de um texto.
  getWordCount: (text) => {
    const words = text.split(" ");
    return words.length;
  },

  //const words = text.split(" ");: Aqui, o texto é dividido em palavras.
  // A função split(" ") divide o texto em pedaços sempre que encontra um espaço em branco. Essas partes são armazenadas em um array chamado words

  getCharacterCount: (text) => {
    //Esta função deve retornar a contagem de caracteres encontrados no parâmetro `text` do tipo `string`.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    // esta função deve retornar a contagem de caracteres excluindo espaços e sinais de pontuação encontrados no parâmetro `text` do tipo `string`.
    const wordsSemCaracteres = text.replace(/[^a-zA-Z0-9]/g, "");  //Aqui, estamos removendo todos os caracteres que não são letras (maiúsculas ou minúsculas) ou números
    const words = wordsSemCaracteres.split(" "); // O texto sem caracteres especiais é dividido em palavras, semelhante ao que fizemos na função anterior. Isso cria um array chamado words
    const stringSemEspaco = words.join(""); //O array words é unido novamente em uma única string, removendo espaços
    return stringSemEspaco.length; //A função retorna o comprimento da string sem espaços,
  },

  getAverageWordLength: (text) => {
    //TODO: Esta função deve retornar o comprimento médio das palavras encontradas no parâmetro `text` do tipo `string`.
    const words = text.split(/\s+/); //O texto é dividido em palavras usando uma expressão regular /\s+/, que corresponde a qualquer sequência de espaços em branco
    let totalWords = 0; //usada para armazenar a soma dos comprimentos de todas as palavras.
    for (let i = 0; i < words.length; i++) totalWords += words[i].length; //Usando um loop, percorremos cada palavra no array words e adicionamos o comprimento de cada palavra à variável totalWords
    return parseFloat((totalWords / words.length).toFixed(2)); // função retorna o valor médio do comprimento das palavras.
    // Isso é calculado dividindo a soma dos comprimentos pelo número total de palavras. 
    //O método toFixed(2) é utilizado para limitar o número de casas decimais 
  },

  getNumberCount: (text) => {
    // Esta função deve retornar quantos números estão no parâmetro `text` do tipo `string`.
    const somaNumeros = text.match(/\b\d+(\.\d+)?\b/g); //Aqui, estamos utilizando a função match para buscar padrões no texto. 
    //A expressão regular /\b\d+(\.\d+)?\b/g procura por números inteiros ou decimais no texto
    if (somaNumeros) {
      return somaNumeros.length;
    } else {
      return 0;
    }
  },

  //erificamos se há números encontrados no texto (somaNumeros). Se houver, retornamos o
  //comprimento do array somaNumeros, que representa a quantidade de números encontrados. 
//Se não houver números, retornamos 0.

  getNumberSum: (text) => {
    //Esta função deve retornar a soma de todos os números encontrados no parâmetro `text` do tipo `string`.
    const somaNumeros = text.match(/\b\d+(\.\d+)?\b/g); 
    if (somaNumeros) {  //Verificamos se há números encontrados no texto 
      let sum = 0;  //nicializamos uma variável sum que será usada para armazenar a soma dos números.
      for (let i = 0; i < somaNumeros.length; i++) {  //: Usamos um loop for para percorrer todos os números 
        //encontrados no array somaNumeros e somamos cada um deles à variável sum
        sum += Number(somaNumeros[i]);  //A função retorna a soma total dos números encontrados no texto.
      }
      return sum;
    } else {
      return 0; //Se não houver números no texto, a função retorna 0
    }
  },
};

export default analyzer;
