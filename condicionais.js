function exercicio01() {

    let idade = prompt("Digite a sua idade:");

    if (idade >= 18) {
        console.log("Você é maior de idade.");

    } else {
        console.log("Você é menor de idade.");

    }
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

}

function exercicio06() {


    let numero = prompt("Digite um numero");

    if (numero % 2 === 0) {
        console.log("par");
    } else {
        console.log("impar");
    }

}

function exercicio03() {

    let nota = prompt("Digite a nota do aluno");

    if (nota >= 60) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

function exercicio02() {

    let numero = prompt("Digite um numero");

    if (numero > 0) {
        console.log("Positivo");
    } else {
        console.log("Negativo");
    }

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

}


function intermediario01() {

    debugger;

    let n1 = prompt ("Digite um numero:");
    let n2 = prompt ("Digite um numero:");

    let numeros = n1 + n2;
    alert (numeros);
  

}
intermediario01();