function convRealDolar() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.resultado-real')
    resultados.forEach(item => { item.classList.remove('resultado-reveal') })

    document.getElementById("input-euro").value = ''
    document.getElementById("input-dolar").value = ''

    const valorReal = document.getElementById("input-real").value
    if (valorReal < 1 || valorReal == '') {
        window.alert("Digite um número maior do que 1.")
        document.getElementById("input-real").value = ''
    } else {
        const valorDolar = valorReal * 0.21

        resultado.classList.add('resultado-reveal')
        resultado.innerHTML = `O valor em Dolar é: $${valorDolar.toFixed(2)}`
    }
}
function convRealEuro() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.resultado-real')
    resultados.forEach(item => { item.classList.remove('resultado-reveal') })

    document.getElementById("input-euro").value = ''
    document.getElementById("input-dolar").value = ''

    const valorReal = document.getElementById("input-real").value
    if (valorReal < 1 || valorReal == '') {
        window.alert("Digite um número maior do que 1.")
        document.getElementById("input-real").value = ''
    } else {
        const valorEuro = valorReal * 0.19

        resultado.classList.add('resultado-reveal')
        resultado.innerHTML = `O valor em Euro é: €${valorEuro.toFixed(2)}`
    }
}
function convRealBitcoin() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.resultado-real')
    resultados.forEach(item => { item.classList.remove('resultado-reveal') })

    document.getElementById("input-euro").value = ''
    document.getElementById("input-dolar").value = ''

    const valorReal = document.getElementById("input-real").value
    if (valorReal < 1 || valorReal == '') {
        window.alert("Digite um número maior do que 1.")
        document.getElementById("input-real").value = ''
    } else {
        const valorBitcoin = valorReal * 0.0000069

        resultado.classList.add('resultado-reveal')
        resultado.innerHTML = `O valor em Bitcoin é: ₿${valorBitcoin.toFixed(7)}`
    }
}

function convEuroReal() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.resultado-euro')
    resultados.forEach(item => { item.classList.remove('resultado-reveal') })

    document.getElementById("input-real").value = ''
    document.getElementById("input-dolar").value = ''

    const valorEuro = document.getElementById("input-euro").value
    if (valorEuro < 1 || valorEuro == '') {
        window.alert("Digite um número maior do que 1.")
        document.getElementById("input-euro").value = ''
    } else {
        const valorReal = valorEuro * 5.38

        resultado.classList.add('resultado-reveal')
        resultado.innerHTML = `O valor em Real é: R$${valorReal.toFixed(2)}`
    }
}
function convEuroDolar() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.resultado-euro')
    resultados.forEach(item => { item.classList.remove('resultado-reveal') })

    document.getElementById("input-real").value = ''
    document.getElementById("input-dolar").value = ''

    const valorEuro = document.getElementById("input-euro").value
    if (valorEuro < 1 || valorEuro == '') {
        window.alert("Digite um número maior do que 1.")
        document.getElementById("input-euro").value = ''
    } else {
        const valorDolar = valorEuro * 1.12 

        resultado.classList.add('resultado-reveal')
        resultado.innerHTML = `O valor em Dolar é: R$${valorDolar.toFixed(2)}`
    }
}
function convEuroBitcoin() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.resultado-euro')
    resultados.forEach(item => { item.classList.remove('resultado-reveal') })

    document.getElementById("input-real").value = ''
    document.getElementById("input-dolar").value = ''

    const valorEuro = document.getElementById("input-euro").value
    if (valorEuro < 1 || valorEuro == '') {
        window.alert("Digite um número maior do que 1.")
        document.getElementById("input-euro").value = ''
    } else {
        const valorBitcoin = valorEuro * 0.000037

        resultado.classList.add('resultado-reveal')
        resultado.innerHTML = `O valor em Bitcoin é: ₿${valorBitcoin.toFixed(6)}`
    }
}

function convDolarReal() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.resultado-dolar')
    resultados.forEach(item => { item.classList.remove('resultado-reveal') })

    document.getElementById("input-real").value = ''
    document.getElementById("input-euro").value = ''

    const valorDolar = document.getElementById("input-dolar").value
    if (valorDolar < 1 || valorDolar == '') {
        window.alert("Digite um número maior do que 1.")
        document.getElementById("input-dolar").value = ''
    } else {
        const valorReal = valorDolar * 4.79

        resultado.classList.add('resultado-reveal')
        resultado.innerHTML = `O valor em Real é: R$${valorReal.toFixed(2)}`
    } 
}
function convDolarEuro() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.resultado-dolar')
    resultados.forEach(item => { item.classList.remove('resultado-reveal') })

    document.getElementById("input-real").value = ''
    document.getElementById("input-euro").value = ''

    const valorDolar = document.getElementById("input-dolar").value
    if (valorDolar < 1 || valorDolar == '') {
        window.alert("Digite um número maior do que 1.")
        document.getElementById("input-dolar").value = ''
    } else {
        const valorEuro = valorDolar * 0.89

        resultado.classList.add('resultado-reveal')
        resultado.innerHTML = `O valor em Euro é: €${valorEuro.toFixed(2)}`
    } 
}
function convDolarBitcoin() {
    const resultados = document.querySelectorAll('.box-resultado')
    const resultado = document.querySelector('.resultado-dolar')
    resultados.forEach(item => { item.classList.remove('resultado-reveal') })

    document.getElementById("input-real").value = ''
    document.getElementById("input-euro").value = ''

    const valorDolar = document.getElementById("input-dolar").value
    if (valorDolar < 1 || valorDolar == '') {
        window.alert("Digite um número maior do que 1.")
        document.getElementById("input-dolar").value = ''
    } else {
        const valorBitcoin = valorDolar * 0.000033

        resultado.classList.add('resultado-reveal')
        resultado.innerHTML = `O valor em Bitcoin é: ₿${valorBitcoin.toFixed(6)}`
    } 
}