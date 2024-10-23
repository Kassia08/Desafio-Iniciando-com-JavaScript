// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert('Hello World!')

// Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.


let a = 5
let b = 10
let soma = a + b

console.log("Soma:", soma)
alert("Soma: " + soma)


/* Crie um script que declare uma variável e verifique se o seu valor é um número. 
Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
Para saber o tipo de dado você pode usar o operador `typeof` */

let valor = 42

if (typeof valor === "number") {
    console.log("É um número")
    alert("É um número")
} else {
    console.log("Não é um número")
    alert("Não é um número")
}


/* Crie um script que declare uma variável e verifique se o seu valor é uma string. 
Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string" */

let texto = "Olá, mundo!";

if (typeof texto === "string") {
    console.log("É uma string")
    alert("É uma string")
} else {
    console.log("Não é uma string")
    alert("Não é uma string")
}


/* Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano" */

let booleano = true

if (typeof booleano === "boolean") {
  console.log("É um booleano")
  alert("É um booleano")
} else {
  console.log("Não é um booleano")
  alert("Não é um booleano")
}

// Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let x = 20
let y = 8
let subtracao = x - y

console.log("Subtração:", subtracao)
alert("Subtração: " + subtracao)


// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let multiplicacao = x * y

console.log("Multiplicação:", multiplicacao)
alert("Multiplicação: " + multiplicacao)


// Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let divisao = x / y

console.log("Divisão:", divisao)
alert("Divisão: " + divisao)


/* Crie um script que declare uma variável e verifique se o seu valor é um número par.
Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par" */

let numeroPar = 12

if (numeroPar % 2 === 0) {
    console.log("É um número par")
    alert("É um número par")
} else {
    console.log("Não é um número par")
    alert("Não é um número par")
}


/* Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar" */

let numeroImpar = 7

if (numeroImpar % 2 !== 0) {
    console.log("É um número ímpar")
    alert("É um número ímpar")
} else {
    console.log("Não é um número ímpar")
    alert("Não é um número ímpar")
}