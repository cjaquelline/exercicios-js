
function basico1() {

    for (let n = 1; n <= 10; n++) {
        console.log(" Contagem " + n);



    }
}


function basico2() {

    let numero = prompt("Digite um numero:");

    for (let i = 1; i <= 10; i++) {

        alert(i * numero);


    }
}


function basico3() {

    let n = prompt("Digite um numero:");

    let soma = 0;

    for (let i = 1; i <= n; i++) {

        soma = soma + i;


    }

    alert(soma);
}


function intermediario3() {

    let n = prompt("Digite um numero:")
    while (n >= 0) {
        console.log(n);
        n--

    }


}


function intermediario1() {

    let valor = prompt("Digite o valor:");
    for (let contador = 2; contador <= 50; contador += 2) {
        alert(contador);
    }

}

function intermediario2() {

    debugger;

    let numeroAleatorio = Math.floor(Math.random() * (100 - 1) + 1);

    let tentativa;

    while (tentativa != numeroAleatorio) {

        tentativa = prompt("Insira um numero:");

        if (numeroAleatorio > tentativa) {
            alert("Numero aleatorio é maior.");

        } else if (numeroAleatorio < tentativa) {
            alert("Numero é menor.");
        } else {
            alert ("Você ACERTOU!");

        }
    }

}



