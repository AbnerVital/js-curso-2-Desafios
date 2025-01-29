let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole(){
    console.log('O botão foi clicado')
}

function exibirAlerta() {
    alert('Eu amo Js')
}

function cidadeDoBrasil (){
    cidade = prompt ('Em qual cidade você nasceu? ')
    alert(`Estive em ${cidade} e lembrei de você`)
}