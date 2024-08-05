/*
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" 
*/

    // objeto usuário, para guardar as informações do "Herói"
let user = {
    wins: 0,
    loses: 0 
}
    // função para calcular o saldo de vitorias "winRate"
function rankCalc(user, wins, loses){
const winRate = wins - loses
let rankingClassification = rankClassification(winRate)

user.wins = wins
user.loses = loses
user.winRate = winRate
user.rankingClassification = rankingClassification

}
    // função com a estrutura de decisão que dara o retorno do "ranking"
function rankClassification(winRate){
    if(winRate <= 10) {
        return  "Ferro"
    }else if(winRate >= 11 && winRate <= 20) {
        return  "Bronze"
    }else if(winRate >= 21 && winRate <= 50) {
        return  "Prata"
    }else if(winRate >= 51 && winRate <= 80) {
        return  "Ouro"
    }else if(winRate >= 81 && winRate <= 90) {
        return  "Diamante"
    }else if(winRate >= 91 && winRate <= 100) {
        return  "Lendário"
    }else if(winRate >= 101) {
        return  "Imortal"
    }else{
        return  "Héroi sem ranking"
    }
}

    // chamada da função de calculo, utilizando o objeto "user" e definindo os valores de vitórias e derrotas
rankCalc(user, 80, 56)

console.log(`O Herói tem de saldo de ${user.winRate} está no nível de ${user.rankingClassification}`)