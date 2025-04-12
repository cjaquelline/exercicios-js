
function exemploDeFilter() {


    let numeros = [1, 2, 50, -7, 38, -17, 3, 4, 5, 6, 7, 8, 9, 10];

    let numerosFiltrados = numeros.filter(numero => numero > 2);

    console.log("numerosFiltrados: " + numerosFiltrados);
    
}


function FilterBasico01() {
    
    let numeros = [19, 28, 38, 42, 5, 1, 19, 3, 5];

    let numerosFiltrados = numeros.filter (numero => numero > 10);

    console.log ("numerosFiltrados: " + numerosFiltrados);

}

function FilterBasico02() {
    let nomes = ["Jaquelline", "João", "Gabriel", "Jucilene", "Ana"];

    let nomesComJ = nomes.filter(nome => nome.startsWith ("J"));

    console.log(nomesComJ);
}

function FilterIntermediario01 () { 
    let produtos = [   
        { nome: "Blush", valor: 90 },
        { nome: "Pó compacto", valor: 120 },
        { nome: "Brilho Labial", valor: 30 },
        { nome: "Corretivo", valor: 75 },
    ];

        let produtosFiltrados = produtos.filter (produto => produto.valor < 50);

        // console.log(produtosFiltrados);

        alert(JSON.stringify (produtosFiltrados));
    }

function FindBasico02 () {
    let produtos = [
        { id: 1, nome: "Teclado", valor:300 },
        { id: 2, nome: "CPU", valor:700 },
        { id: 3, nome: "Mouse", valor:150 },
    ];

    let produtoFiltrado = produtos.find (produto => produto.valor == 700);

    console.log(produtoFiltrado);

}
function FindBasico01 () {
    let nomes = ["Amanda", "Joana", "Julaian"]

    let amanda = nomes.find (nome => nome == "Amanda");
    console.log(amanda);
}

function FindBasico03 () {
    let nomes = [
        { id: 1, nome: "Jaquelline"},
        { id: 2, nome: "Joana"},
        { id: 3, nome: "Maria"},
    ];

    let nomeFiltrado = nomes.find (nome => nome.id == 2)
    console.log(nomeFiltrado);

}

function MapBasico01 () {
    let numeros = [1, 2, 3, 4, 5];

    let numerosDobrados = numeros.map (numero => numero * 2);

    console.log (numerosDobrados);
}

function MapBasico02 () {

    let palavras = [ "Oi", "Siim", "Não"];

    let palavrasEnfatizadas = palavras.map (palavra => palavra + "!!!");
    console.log(palavrasEnfatizadas);

 }
 
 function MapBasico03 () {
    let colaborador
 }