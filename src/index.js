import analyzer from "./analyzer.js";
//TODO: ouve eventos DOM e invoca os métodos do objeto `analyzer`
//declarando todos os itens
const textArea = document.querySelector('[name="user-input"]'); // esse Dom seleciona o atributo name igual ao user-input
//const button = document.getElementById('[reset-button"]');
const wordCount = document.querySelector('[data-testid="word-count"]'); //retornar a contagem de palavras encontradas no parametro text
const characterCount = document.querySelector('[data-testid="character-count"]'); //contar caracteres
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]'); //contar caracteres excluindo espaços
const numberCount = document.querySelector('[data-testid="number-count"]'); //elemento Dom para contar os numeros no texto
const numberSum = document.querySelector('[data-testid="number-sum"]'); //elemento Dom exibir  a soma dos numeros do texto
const wordLengthAvarege = document.querySelector('[data-testid="word-length-average"]'); //exibir a media de comprimento das palavras

//evento textArea 
// addEventListener - usar sempre apos seletor de Dom
textArea.addEventListener("input", () => {
  const inputText = textArea.value;
  wordCount.textContent = "Palavras: " + analyzer.getWordCount(inputText);
  characterCount.textContent = "Caracteres: " + analyzer.getCharacterCount(inputText);
  characterNoSpacesCount. textContent = "Caracter sem espaço: " + analyzer.getCharacterCountExcludingSpaces(inputText);
  numberCount.textContent = "Contagem de números: " +  analyzer.getNumberCount(inputText);
  numberSum.textContent = "Soma numeros: " +  analyzer.getNumberSum(inputText);
  wordLengthAvarege.textContent = "Comprimento Palavras: " + analyzer.getAverageWordLength(inputText);
});

//Reset Botão
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  textArea.value = " ";
});


