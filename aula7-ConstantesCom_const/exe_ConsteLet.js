/*
    João Batista Rodriuges Ribeiro tem 36 anos, pesa 78 kg
    tem 1.82 de altura e IMC e de: 24.074074074074073
    João Batista nasceu em 1986

*/

const nome = 'João Batista'
const sobrenome = 'Rodriuges Ribeiro'
const idade = 36
const peso = 78
const alturaEmCm = 1.80
let indiceMassaCorporal // peso / (altura * altura)
let anoNascimento

indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm)
anoNascimento = 2022 - idade

// template strins

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmCm} de altura e seu IMC e de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em  ${anoNascimento}`)
