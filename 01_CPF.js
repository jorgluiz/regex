function regex(value){
    let regex =  /^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/
      if(!regex.test(value)){
          return console.log('CPF NÃO É VÁLIDO')
      }

    return console.log('cpf valido ',value)
}

let  cpf = '084.322.204-26'

regex(cpf)