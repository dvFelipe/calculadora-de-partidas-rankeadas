//Calculadora de Partidas Rankeadas
function calcularRanking(vitorias, derrotas)
{
    let saldoRankeadas = vitorias - derrotas;

    let nivel;

    if(saldoRankeadas <= 10)
    {
        nivel = "Ferro";
    }
    else if(saldoRankeadas >= 11 && saldoRankeadas <= 20)
    {
        nivel = "Bronze";
    }
    else if(saldoRankeadas >= 21 && saldoRankeadas <= 50)
    {
        nivel = "Prata";
    }
    else if(saldoRankeadas >= 51 && saldoRankeadas <= 80)
    {
        nivel = "Ouro";
    }
    else if(saldoRankeadas >= 81 && saldoRankeadas <= 90)
    {
        nivel = "Diamante";
    }
    else if(saldoRankeadas >= 91 && saldoRankeadas <= 100)
    {
        nivel = "Lendário";
    }
    else 
    {
        nivel = "Imortal";
    }

    console.log("O Herói tem " + saldoRankeadas + " de saldo e está no nível " + nivel + ".")
}

calcularRanking(134, 48);