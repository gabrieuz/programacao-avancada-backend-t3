/* Desafio 2: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas.
Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora(que serão propriedades do objeto)
com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON. */

class Calculadora {
	constructor(n1, n2) {
		this.soma = n1 + n2;
		this.subtracao = n1 - n2;
		this.multiplicacao = n1 * n2;
		this.divisao = n1 / n2;
	}

	createJSON() {
		return JSON.stringify(this);
	}

	get json() {
		return JSON.parse(this.createJSON());
	}
}

function calcular() {
	const form = document.getElementById("form-calculadora");
	const primeiroValor = parseFloat(form.primeiroValor.value);
	const segundoValor = parseFloat(form.segundoValor.value);
	const resultado = document.getElementById("resultado");

	const calc = new Calculadora(primeiroValor, segundoValor);

	if (primeiroValor && segundoValor) {
		resultado.innerText = `${calc.createJSON()}`;
		form.primeiroValor.style.border = "1px solid #8d8d8d";
		form.segundoValor.style.border = "1px solid #8d8d8d";
	} else if (!primeiroValor && segundoValor) {
		form.primeiroValor.style.border = "1px solid red";
		form.segundoValor.style.border = "1px solid #8d8d8d";
	} else if (!segundoValor && primeiroValor) {
		form.segundoValor.style.border = "1px solid red";
		form.primeiroValor.style.border = "1px solid #8d8d8d";
	} else {
		form.primeiroValor.style.border = "1px solid red";
		form.segundoValor.style.border = "1px solid red";
	}
}
