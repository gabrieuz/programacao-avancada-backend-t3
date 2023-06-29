// Estudando assincronismo | Callbacks - Aula 23/06

// function dataAtual() {

//     let data = new Date();
//     let dia = data.getDate();
//     let mes = data.getMonth() + 1;
//     let hora = data.getHours();
//     let min = data.getMinutes();
//     let seg = data.getSeconds();

//     console.log(`Hoje é ${dia}/${mes} , ${hora}:${min}:${seg}`);
// }

// setTimeout(dataAtual, 5000);
// setTimeout(dataAtual, 5000);
// setTimeout(dataAtual, 5000);

// Pergunta 01 - R: Todos foram imprimidos de uma vez.

// setInterval(dataAtual, 5000);
// setTimeout(dataAtual, 5000);
// setTimeout(dataAtual, 5000);

// Estudando assincronismo | Callbacks - Aula 26/06

// Pergunta 02 - R: O primeiro e o terceiro foram impressos juntos, e o terceiro foi impresso a cada 5 segundos.

// const fs = require("fs");
// console.log("Primeira saída.");
// fs.readFile("./first-project-node/text.txt", "utf-8", (err, conteudo) => {
// 	if (err) return console.log(err);
// 	console.log(conteudo);
// });
// console.log("Segunda saída.");
// console.log("Terceira saída.");

// function soma(sucesso, erro) {
// 	const resultado = 1 + 1;
// 	if (resultado === 2) sucesso();
// 	else erro();
// }

// soma(
// 	() => {
// 		console.log("Sucesso! A soma é 2.");
// 	},
// 	() => {
// 		console.log("Erro! A soma não é 2.");
// 	}
// );

// Estudando assincronismo | Promisses - Aula 30/06

// const p = new Promise((resolve, reject) => {
// 	const resultado = 1 + 1;
// 	if (resultado === 2) resolve("Sucesso! A soma é 2.");
// 	else reject("Erro! A soma não é 2.");
// });

// p.then((mensagem) => {
// 	console.log(`Resultado: ${mensagem}`);
// }).catch((mensagem) => {
// 	console.log(`Resultado: ${mensagem}`);
// });

// Voltando para Callbacks

// const melhorProgramador = "Paulo Sampaio";

// function oMelhor(callback, callbackErro) {
// 	if (melhorProgramador === "João Felix") {
// 		callback({
// 			nome: melhorProgramador,
// 			mensagem: "Humildemente o melhor!",
// 		});
// 	} else {
// 		callbackErro({
// 			mensagem01: "Tá errado...",
// 			mensagem02: melhorProgramador + ", sério?",
// 		});
// 	}
// }

// oMelhor(
// 	(sucesso) => {
// 		console.log(sucesso.nome);
// 		console.log(sucesso.mensagem);
// 	},
// 	(erro) => {
// 		console.log(erro.mensagem01);
// 		console.log(erro.mensagem02);
// 	}
// );

// Voltando para Promisses

const melhorProgramador = "Paulo Sampaio";

const p = new Promise((resolve, reject) => {
	if (melhorProgramador === "João Felix") {
		resolve({
			nome: melhorProgramador,
			mensagem: "Humildemente o melhor!",
		});
	} else {
		reject({
			mensagem01: "Tá errado...",
			mensagem02: melhorProgramador + ", sério?",
		});
	}
});

p.then((sucesso) => {
	console.log(sucesso.nome);
	console.log(sucesso.mensagem);
}).catch((erro) => {
	console.log(erro.mensagem01);
	console.log(erro.mensagem02);
});
