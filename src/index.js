import analyzer from "./analyzer.js"; //Aqui, estamos importando um objeto 
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

//Estamos pegando um elemento na página HTML. Este elemento é a área de texto 

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

// Agora, estamos dizendo que queremos "escutar" quando algo acontece na área de texto. 
//Se você digitar algo, isso será "ouvido". E quando isso acontecer, o que está dentro do { ... } será executado.


//Reset Botão
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
  textArea.value = "";
});

//Estamos selecionando o elemento do HTML que possui o ID "reset-button" e 
//guardando-o na variável resetButton. É como se estivéssemos dizendo: "Vamos pegar o //otão com o rótulo 
//'reset-button' e guardá-lo em uma caixa chamada resetButton
//Aqui estamos dizendo que queremos "escutar" quando o botão for clicado. 
//Quando isso acontecer, o que está dentro do { ... } será executado.
//Dentro dessa função, estamos dizendo que queremos definir o valor (o que está escrito) 
//na área de texto (textArea) como uma string vazia (""). Isso significa que, quando o botão 
//de reset for clicado, o texto na área de texto será apagado, como se você estivesse
// apertando um botão para limpar o que escreveu.
