
//----------- KATAS 1 ----------

function calculateSalary(sal, totalCompras){

    return totalCompras >= 1 && totalCompras <= 1200  ? (totalCompras * 0.03) + sal : totalCompras > 1200 ? ((totalCompras - 1200) * 0.05) + (1200 * 0.03) + sal : `Não houve nenhuma compra este mês, então só recebrá o salário fixo de R$${sal}`
}

console.log(calculateSalary(900,1200))

//----------- KATAS 2 ----------

function cashMachine(valSaque, valSalFixo, valVendas){

    let saldo = calculateSalary(valSalFixo, valVendas)
    let saque = valSaque
//                  200 100 50 20 10 5  2 
    let NotasSaque = [0, 0, 0, 0, 0, 0, 0]
    let saldoFinal = (saldo - saque)
    
    if(saque !== 0){

        while(saque >= 200){

            NotasSaque[0]++
            
            saque -= 200
    
        }
        
        while(saque >= 100){
    
            NotasSaque[1]++
            
            saque -= 100
    
        }
        
        while(saque >= 50){
    
            NotasSaque[2]++
            
            saque -= 50
    
        }
        
        while(saque >= 20){
    
            NotasSaque[3]++
            
            saque -= 20
    
        }
        
        while(saque >= 10){
    
            NotasSaque[4]++
            
            saque -= 10
    
        }
        
        while(saque >= 5){
    
            NotasSaque[5]++
            
            saque -= 5
    
        }
        
        while(saque >= 2 ){
    
            NotasSaque[6]++
            
            saque -= 2
    
        }

    }
    


    let resultado = "Notas sacadas: "


        if(NotasSaque[0] >= 1){

            resultado += `${NotasSaque[0]} nota(s) R$ 200, `

        }if(NotasSaque[1] >= 1){

            resultado += `${NotasSaque[1]} nota(s) R$ 100, `

        }if(NotasSaque[2] >= 1){

            resultado += `${NotasSaque[2]} nota(s) R$ 50, `

        }if(NotasSaque[3] >= 1){

            resultado += `${NotasSaque[3]} nota(s) R$ 20, `

        }if(NotasSaque[4] >= 1){

            resultado += `${NotasSaque[4]} nota(s) R$ 10, `

        }if(NotasSaque[5] >= 1){

            resultado += `${NotasSaque[5]} nota(s) R$ 5, `

        }if(NotasSaque[6] >= 1){

            resultado += `${NotasSaque[6]} nota(s) R$ 2, `

        }
        
        return Math.sign(saldoFinal) == -1 ? `NEGADO!, valor solicitado maior que saldo. seu saldo é de R${saldo}`: resultado += `Seu saldo atual é: R$ ${saldoFinal}`

}

console.log(cashMachine(307, 900, 1300))


//----------- KATAS 3 ----------

function calculateStock(quantidadeAtual, quantidadeMaxima, quantidadeMinima){

    let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2
   
    return quantidadeAtual >= quantidadeMedia ? 'Não efetuar compra' : 'Efetuar compra'

}

console.log(calculateStock(200, 210, 0))

//----------- KATAS 4 ----------

function calculateAge(anoNascimento, anoAtual){

    let idadeAno = anoAtual - anoNascimento
    let idadeMeses = idadeAno * 12
    let idadeSemanas = idadeMeses * 4.5
    let idadeDias = idadeSemanas * 7

    return `Sua idade em anos são: ${idadeAno} anos / Sua idade em meses são: ${idadeMeses} meses / Sua idade em semanas são: ${idadeSemanas} semanas / Sua idade em dias são: ${idadeDias} dias `

}

console.log(calculateAge(2000, 2022))

//----------- KATAS 5 --------------

function getDiagonal(){

    let matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]

    ]

    let numeros = ""
    let EsquerdaToDireita = []
    let DireitaToEsquerda = []


    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            
            numeros += matriz[i][j] 
            
        }
    }

    EsquerdaToDireita.push(numeros.split("")[0])
    EsquerdaToDireita.push(numeros.split("")[4])
    EsquerdaToDireita.push(numeros.split("")[8])

    DireitaToEsquerda.push(numeros.split("")[2])
    DireitaToEsquerda.push(numeros.split("")[4])
    DireitaToEsquerda.push(numeros.split("")[6])
    
    //return DireitaToEsquerda
    return EsquerdaToDireita
    
}

console.log(getDiagonal())

// ---------------------------- Fim ------------------------------------
