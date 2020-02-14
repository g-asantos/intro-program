
// Desafio 01-01

 const nome = 'Diego';
const peso = 70;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
 } else {
     console.log (`${nome} você não está acima do peso`)
 }



// calculo aposentadoria

 const nome = 'Silvana'
 const sexo = 'F'
 const idade = 48
 const contribuição = 23

 if (sexo == 'F'){
     if ((contribuição >= 30) && (contribuição + idade >= 85)) {
         console.log(`${nome}, você pode se aposentar!`)
     } else {
        console.log (`${nome}, você ainda não pode se aposentar!`)
    }
} else if((contribuição >= 35) && (contribuição + idade >= 95)) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log (`${nome}, você ainda não pode se aposentar!`)
}


//Desafio 01-02

const empresa = {
    nome: 'RocketSeat',
    Cor: 'Roxo',
    Foco: 'Programação',
    Endereço: {
        Rua: 'Rua Guilherme Gembala',
        Número: 260
    }


}

console.log(`A ${empresa.nome} está localizada na ${empresa.Endereço.Rua}, ${empresa.Endereço.Número}`)


const programador = {
    nome: 'Carlos',
    idade: 45,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop'},
        { nome: 'Python', especialidade: 'Machine Learning'},
        { nome: 'Javascript', especialidade: 'Mobile'}
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[2].nome} com a especialidade ${programador.tecnologias[2].especialidade}`)


// Desafio 01-03

const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
  ]

function InfoUsers(usuarios) {
    for(let i = 0; i < usuarios.length; i++){
        console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
    }
}

InfoUsers(usuarios);

const usuarios = [
         { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
         { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
         { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
       ]

function checaSeUsuarioUsaCSS(usuarios){
     for (let i = 0; i < usuarios.tecnologias.length; i++){
        if(usuarios.tecnologias[i] == 'CSS'){
            return true
        } 

        }
      }
       

       
function MandaMensagem(){
    for (let i = 0; i < usuarios.length; i++) {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
      
        if(usuarioTrabalhaComCSS) {
          console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
        } 
        
        
      }
}
   
  
MandaMensagem();



const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]
  
    function somaNumeros(numeros) {
        let soma = 0;
        for (let i = 0; i < numeros.length; i++){
            soma += numeros[i]
        }
        return soma;
     }

    
    function calculaSaldo(receitas, despesas) {
        let soma1 = somaNumeros(receitas);
        let soma2 = somaNumeros(despesas);
        let saldo = (soma1 - soma2)
        return saldo      
    }

    function calculoFinal(){
        
      for (let i = 0; i < usuarios.length; i++){
            let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas)
            

            if(saldo > 0){
                console.log(`O usuário ${usuarios[i].nome} possui saldo POSITIVO de ${saldo} `)
            } else {
                console.log(`O usuário ${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`)
            }
        }

        
    }

    calculoFinal();


// Desafio 01-04

const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

function createTransaction(transaction){
    user.transactions.push(transaction);
        
      if(transaction.type == 'credit'){
       user.balance += transaction.value
      } else if (transaction.type == 'debit'){
        user.balance -= transaction.value
      }
    }


    function getHigherTransactionByType (type) {
    
      let order = 0
      let resultTransaction = {}
      resultTransaction.value = 0
  
      for (let transaction of user.transactions) {
  
          if (transaction.type == type) {
              
              order = transaction.value
              
              if (order > resultTransaction.value){
                  resultTransaction = transaction   
              }
          }
      }
  
      return resultTransaction
  }


    function getAverageTransactionValue(){
      let soma = 0;
      for(let i = 0; i < user.transactions.length; i++){
        soma += user.transactions[i].value
      }
      
      console.log(soma / (user.transactions.length))
    
    }

  function getTransactionsCount(user){
      
    let credit = 0, debit = 0

    for ( let transaction of user.transactions ) {
        if (transaction.type == 'credit') {
            credit++
        }
        else{
            debit++
        }
    }

    return {credit: credit, debit: debit}
}
    