function exercicio01() {

    let idade = prompt("Digite a sua idade:");

    if (idade >= 18) {
        console.log("Você é maior de idade.");

    } else {
        console.log("Você é menor de idade.");

    }
    gerarLog("Exercício de condicional 01 executado às " + new Date().toLocaleDateString());
}

function exercicio04() {

    let numero = prompt("Digite um número:"); //promp é como eu solicito uma informação para o usuario

    if (numero > 0) {
        console.log("Positivo.");

    } else {
        if (numero < 0) {
            console.log("Negativo");


        } else {
            console.log("É zero.");

        }
    }
    gerarLog("Exercício de condicional 04 executado às " + new Date().toLocaleDateString());

}

function exercicio06() {


    let numero = prompt("Digite um numero:");

    if (numero % 2 === 0) {
        console.log("par");
    } else {
        console.log("impar");
    }

    gerarLog("Exercício de condicional 06 executado às " + new Date().toLocaleDateString());
}

function exercicio03() {

    let nota = prompt("Digite a nota do aluno:");

    if (nota >= 60) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");

    }
    gerarLog ("Exercício de condicional 03 executado às " + new Date() . toLocaleDateString());
}

function exercicio02() {

    let numero = prompt("Digite um numero");

    if (numero > 0) {
        console.log("Positivo");
    } else {
        console.log("Negativo");
    }
    gerarLog ("Exercício de condicional 02 executado às " + new Date() . toLocaleDateString());

}

function exercicio05() {
    let numero = prompt("Digite sua idade");

    if (numero <= 12) {
        alert("Você é Criança.");
    } if (numero >= 13 && numero <= 17) {
        alert("Você é adolecente");
    } if (numero >= 18) {
        alert("Você é adulto");
    }
    gerarLog ("Exercício de condicional 05 executado às " + new Date() . toLocaleDateString());

}


function intermediarioCondicional01() {

    let n1 = Number(prompt("Digite um numero:"));
    let n2 = Number(prompt("Digite um numero:"));

    let numeros = n1 + n2;
    alert(numeros);

    gerarLog ("Exercício de condicional 06 executado às " + new Date() . toLocaleDateString());

}

function intermediarioCondicional02() {

    debugger;

    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));

    let maior;

    if (n1 >= n2 && n1 >= n3) {
        maior = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        maior = n2;
    } else {
        maior = n3;
    }

    alert("O maior número é: " + maior);

    gerarLog ("Exercício de condicional 07 executado às " + new Date() . toLocaleDateString());


}

function gerarLog(textoDoLog) {
    let logsContainer = document.querySelector(".logs-container");

    let paragraph = document.createElement("p");

    paragraph.innerHTML = textoDoLog;

    logsContainer.appendChild(paragraph);


}