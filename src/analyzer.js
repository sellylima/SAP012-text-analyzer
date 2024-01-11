const analyzer = {
  //esta função deve retornar a contagem de palavras encontradas no parâmetro `text` do tipo `string`. //calcular a contagem de palavras de um texto.
  getWordCount: (textArea) => {
    return textArea.split(" ").length;
  },
  getCharacterCount: (text) => {
    return text.length;
    //Esta função deve retornar a contagem de caracteres encontrados no parâmetro `text` do tipo `string`.
  },
   getCharacterCountExcludingSpaces: (text) => {
  // esta função deve retornar a contagem de caracteres excluindo espaços e sinais de pontuação encontrados no parâmetro `text` do tipo `string`.
   },
   getAverageWordLength: (text) => {
  //TODO: Esta função deve retornar o comprimento médio das palavras encontradas no parâmetro `text` do tipo `string`.
   },
  getNumberCount: (text) => {
  // Esta função deve retornar quantos números estão no parâmetro `text` do tipo `string`.
  },
  getNumberSum: (text) => {
  //Esta função deve retornar a soma de todos os números encontrados no parâmetro `text` do tipo `string`.
  const somaNumeros = text.match(/\d+/g);
  if(numbers){
    const sum =  numbers.reduce((acc, num) => acc + parseInt (num), 0) ;
    return sum;
  }else{
    return 0;
  }

 // return numbers ? numbers.reduce((acc, num) => acc + parseInt (num), 0) : 0;
  //let total = somaNumeros.reduce((total,somaNumeros) => total + somaNumeros, 0);
  //console.log(total);
  },
};

export default analyzer;
