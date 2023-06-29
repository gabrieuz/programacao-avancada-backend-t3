/* Desafio 1: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. 
Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis. */

const fiveNumbers = [2, 3, 5, 7, 11];

let objeto = {
	v1: fiveNumbers[0],
	v2: fiveNumbers[1],
	v3: fiveNumbers[2],
	v4: fiveNumbers[3],
	v5: fiveNumbers[4],
};

let [n1, n2, n3, n4, n5] = fiveNumbers;

json = JSON.stringify(objeto);
json = JSON.parse(json);
console.log(json);
