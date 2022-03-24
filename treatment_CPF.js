const cpf = document.querySelector('.input-cpf')

cpf.addEventListener('blur', () => {

    // document.querySelector('.input-cidade').style.display = 'none'

    const regex = /^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/
    console.log(regex.test(cpf.value))
    if (!regex.test(cpf.value)) {
        let cpfV = document.querySelector('.input-cpf')
        cpfV.style = 'margin: 2px auto' // style input name
        cpfV.style.borderColor = '#FF0000' // style input name


        const errorElement = document.querySelector('.cpf-error')
        errorElement.innerHTML = 'CPF INVÁLIDO (VÁLIDO: 000.000.000-00)'

        cpfV.insertAdjacentElement('afterend', errorElement)

    } else {
        document.querySelector('.input-cpf').style = ''
        document.querySelector('.cpf-error').remove()
    }

})