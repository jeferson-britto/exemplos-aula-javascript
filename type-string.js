const texto1 = "Olá, Mundo";

console.log(texto1);

const senha = "supersegura453";
console.log(senha);

//usar aspas simples para abrir a cadeia de string e aspas duplas para citação dentro da cadeia

const citacao = ' O Leo disse "oi!"';
console.log(citacao);

//concatenação de string

const marido = "Jeferson";
const esposa = "Angela";

const casados = marido + esposa;
console.log(casados);

// ou

console.log( esposa + marido);

//padronizando strings ex para tudo minusculo

const cidade = "belo horizonte";
const capital = "Belo Horizonte";
const capitalMinusculo = capital.toLowerCase();

console.log(cidade === capitalMinusculo);

//para descobrirmos quantos caracteres tem uma string usamos o lenth

const login = "minha senha12345";
console.log(login.length);