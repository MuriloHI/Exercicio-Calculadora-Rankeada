let qtdVitorias = 299;
let qtdDerrotas = 5;

function calculadora(qtdVitorias, qtdDerrotas) {
    let saldoRankeada = qtdVitorias - qtdDerrotas;
    let nivel;

    if (saldoRankeada <= 10) {
        nivel = "FERRO";
    } else if (saldoRankeada >= 11 && saldoRankeada <= 20) {
        nivel = "BRONZE";
    } else if (saldoRankeada >= 21 && saldoRankeada <= 50) {
        nivel = "PRATA";
    } else if (saldoRankeada >= 51 && saldoRankeada <= 80) {
        nivel = "OURO";
    } else if (saldoRankeada >= 81 && saldoRankeada <= 90) {
        nivel = "DIAMANTE";
    } else if (saldoRankeada >= 91 && saldoRankeada <= 100) {
        nivel = "LENDÁRIO";
    } else if (saldoRankeada >= 101) {
        nivel = "IMORTAL";
    }

    return `O Herói tem de saldo ${saldoRankeada} e está no nível de ${nivel}`;
}

let resultado = calculadora(qtdVitorias, qtdDerrotas);
console.log(resultado);