// Carne - 400g por pessoa + de 6 horas - 650g

// Cerveja - 1200ml por pessoa + de 6 horas 2000ml

// Refrigerante/água 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao
    

    let totalCarne = (carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)) / 1000;
    let totalCerveja = (cervejaPP(duracao) * adultos) / 1000;
    let totalBebidas = (bebidasPP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)) / 1000;

    resultado.innerHTML = `<p>${totalCarne.toFixed(1)} Kg de Carne.`;
    resultado.innerHTML += `<p>${totalCerveja.toFixed(1)} L de Cerveja.`
    resultado.innerHTML += `<p>${totalBebidas.toFixed(1)} L de Bebidas.`
}

function carnePP(duracao) {
    if(duracao > 6){
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if(duracao > 6){
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao > 6){
        return 1500;
    }
    else {
        return 1000;
    }
}
