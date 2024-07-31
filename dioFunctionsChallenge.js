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

const user = [
    {name: "", win: 17,lose: 5},
    {name: "", win: 2,lose: 5},
    {name: "Jose", win: 2,lose: 5},
    {name: "Jose", win: 2,lose: 5},
    {name: "Jose", win: 2,lose: 5},
    {name: "Jose", win: 2,lose: 5},
    {name: "Jose", win: 2,lose: 5},
    {name: "Jose", win: 2,lose: 5}
]

function rankCalc(usr, rank){
    for(let i = 0; i < usr.length; i++) {
       let userName = user[i].name
       let wins = user[i].win
       let loses = user[i].lose
       let winLoss = wins - loses
       
       return winLoss
    }
    return console.log("Rank invalido")
}
let victoryBalance = rankCalc(user)
let ranking = ""
for(let i = 0; i < usr.length; i++) {
    let userName = user[i].name

    switch(true){
        case(rankCalc <= 10):
            ranking = "Ferro"
            console.log(victoryBalance + ranking)
            break
        case(rankCalc >= 11 && rankCalc <= 20):
            ranking = "Bronze"
            console.log("")
            break
        default: 
            console.log("")
        
    }
}
console.log(victoryBalance)