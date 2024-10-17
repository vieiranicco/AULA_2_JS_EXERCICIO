var userNum1 = prompt("Insira o Primeiro Número")
var convNum1 = parseInt(userNum1);
var userNum2 = prompt("Insira o Segundo Número");
var convNum2 = parseInt(userNum2);

var saidaSoma = convNum1 + convNum2; 

console.log("A soma dos seus números é: " , saidaSoma)

var saidaProd = convNum1 * convNum2;

alert("O produto dos seus números é: " + saidaProd)



// ao inves de usar duas variaveis para realizar o processo é possível unir o parseInt com o Prompt
// var userNum1 = parseInt(prompt("Digite o Primeiro Número"))
// var userNum2 = parseInt(prompt("Digite o Segundo Número"))
// var saida = userNum1 + userNum2