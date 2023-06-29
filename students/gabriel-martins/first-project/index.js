
function dataAtual() {

    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();

    console.log(`Hoje é ${dia}/${mes}/${ano}`);
}

setTimeout(dataAtual, 5000);
setTimeout(dataAtual, 5000);
setTimeout(dataAtual, 5000);

// Pergunta 01 - R: Todos foram imprimidos de uma vez.

setTimeout(dataAtual, 5000);
setInterval(dataAtual, 5000);
setTimeout(dataAtual, 5000);

// Pergunta 02 - R: O primeiro e o terceiro foram impressos juntos, e o segundo foi impresso a cada 5 segundos.
