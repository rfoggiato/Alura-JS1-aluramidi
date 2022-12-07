function tocaSom (idAudioElement) {
    const elemento = document.querySelector(idAudioElement);
    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];// declara uma tecla
    
    const instrumento = tecla.classList[1]; // declara o nome da segunda classe de cada item da lista de botoes
    
    const idAudio = `#som_${instrumento}`; // usa templateString p/ definir o ID de audio
    
    tecla.onclick = function () {
        tocaSom (idAudio);
    } // executa o som

    tecla.onkeydown = function (keydown) {
        if(keydown.code === "Enter" || keydown.code === "Space") {
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
