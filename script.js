let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flist")
let res= document.querySelector("div#res")
let valores =[] // VETOR vazio, para analisar os dados

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inlista(n,l){
    if (l.indexOf(Number(n)) >-1) /* ou !=-1, o valor não foi encontrado na lista*/{
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inlista(num.value, valores)) /* !inlista - o "!" expressa, "se NÃO estiver na lista" */ {
        valores.push(Number(num.value))
        let item = document.createElement("option") 
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item); /*Retorno visual dentro da caixa select*/
        res.innerHTML=""  
    } else {
    window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = "" // limpa o valor selecionado de dentro do "input number"
    num.focus() // retorna a seleção para dentro da caixa do "input number"
}

function finalizar(){
    if (valores.length == 0){ // se estiver vazio
        window.alert("Adicione valores antes de finalizar")
    } else {
        let total= valores.length // quantos elementos o vetor tem
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = "" // zerar o valor
        res.innerHTML += `<p>Temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é igual à ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
