/* Desafio A+: Fazer esquema em que um código declara uma variável (let) e uma função faz a soma do valor da variável com
 um valor estático(5, por exemplo) como retorno. Outro código importa o primeiro e declara uma variável com o mesmo nome e outro valor. 
 Em seguida, chama a função do primeiro código. Qual valor será exibido ?
 Utilizar o artigo disponível no endereço https://www.horadecodar.com.br/2020/08/13/como-incluir-um-arquivo-de-javascript-em-outro/
*/

let valor = 5;
let arquivo = "Arquivo 01";

export function soma(arquivo) {
	console.log(`\n${arquivo} - Soma: ${valor + 1}`);
}

soma(arquivo);
