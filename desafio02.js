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
	const form = document.getElementById("calculadora");

	const primeiroValor = parseFloat(form.primeiroValor.value);
	const segundoValor = parseFloat(form.segundoValor.value);

	const calc = new Calculadora(primeiroValor, segundoValor);

	const resultado = document.getElementById("resultado");

	resultado.innerHTML = calc.createJSON();
}
