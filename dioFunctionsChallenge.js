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
    {name: "homer", win: 17,lose: 5},
    {name: "jp", win: 2,lose: 5},
    // {name: "Jose", win: 2,lose: 5},
    // {name: "Jose", win: 2,lose: 5},
    // {name: "Jose", win: 2,lose: 5},
    // {name: "Jose", win: 2,lose: 5},
    // {name: "Jose", win: 2,lose: 5},
    // {name: "Jose", win: 2,lose: 5}
]


function rankCalc(usr){
    for(let i = 0; i < usr.length; i++) {
       let wins = user[i].win
       let loses = user[i].lose
       let winRateFunc = wins - loses
       
       return winRateFunc
    }
}

for(let j = 0; j < user.length; j++) {
    let userName = user[j].name
    let winRate = rankCalc(user)
    let ranking = ""

    
    switch(true){
        case(winRate <= 10):
            ranking = "Ferro"
            console.log(winRate + ranking)
            break
        case(winRate >= 11 && winRate <= 20):
            ranking = "Bronze"
            console.log(winRate + ranking)
            break
        default: 
            console.log("error")
        
    }
}
