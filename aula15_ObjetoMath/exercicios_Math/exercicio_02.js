/*
 Crie uma função que receba dois números como argumento e retorne o maior valor entre eles usando o método  `Math.max()`
*/

function maiorValor(...numero) {
    return Math.max(...numero)
}

console.log(maiorValor(10,3,50,1050,100));