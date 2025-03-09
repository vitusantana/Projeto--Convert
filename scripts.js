//Cotação do dia
const USD = 5.79; 
const EUR = 6.27;
const GBP = 7.48;

// Constantes para manupulação do HTML.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {

    // Constante abaixo não permite adicionar texto no campo.
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit (enviar) do formulario.
form.onsubmit = (event) => {
    event.preventDefault()
    
    // switch case para selecionar moeda.
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
    } switch (currency.value){
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
    } switch (currency.value){
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
    try {
        // Exibindo cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calculando total.    
        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total.
        result.textContent = `${total} Reais `

        // Aplica a calsse que exibe o footer para mostar o resultado.
        footer.classList.add("show-result")

    }catch(error){
        console.log(error)
        // Remove o footer da tela.
        footer.classList.remove("show-result")
        alert("Não foi possivel converter. Tente novamente mais tarde.")

    }
}

// Formatando moeda para real brasileiro.
function formatCurrencyBRL (value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL", 
    })
}