//Expressões Regulares Javascript - Substitua caracteres não numéricos
// Esse simples trecho substituirá qualquer coisa que não seja um número por nada.
// Mas decimais também são reais. Então, estou tentando descobrir como incluir um período.

let cpf = '000.000.000-88'

// regex remover .  - 
let newCPF = cpf.replace(/[^0-9]/g, "")

console.log(newCPF)
