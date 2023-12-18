import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//  PRECISA CHAMAR UM POR UM??
const metricas =  document.querySelectorAll('metrica') 

const textArea = document.getElementById('user-input')
const resetButton = document.getElementById('reset-button')

resetButton.addEventListener('click', () => {
    textArea.value = '';
    metricas.textContent = 'palavras';

})