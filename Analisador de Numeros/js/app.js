let num = document.querySelector('input#number');
let list = document.querySelector('select#adicao');
let res = document.querySelector('div#resultado')
let valores = [];


// Inicio functions referente botão adicionar
function number() {
    let number = Number(num.value);
    return number;
}

function lista() {
    let item = document.createElement('option');
    valores.push(number())
    item.text = `valor ${number()} adicionado`;
    list.appendChild(item);
    num.value = ''    
    num.focus();
    res.innerHTML = ''
}
// Final functions referente botão adicionar

// Inicio functions referente botão Finalizar
function totalValores() {
    let total = valores.length;
    return total;
}

function valorMaior() {
    let maior = Math.max.apply(null, valores)
    return maior
}

function valorMenor() {
    let menor = Math.min.apply(null, valores)
    return menor;
}

function somandoTodosValores() {
    let soma = 0;
    for(let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }
    return soma;
}

function media() {
    let media = somandoTodosValores() / totalValores();
    return media.toFixed(2)
}
// Final functions referente botão finalizar


// Resultados botões adicionar e Finalizar
function adicionar() {
    if(number() <= 0 || number() > 100) {
        alert('Valor Inválido! Insira um valor entre 1 e 100')
    } else {
        lista();
    }
}

function finalizar() {
    if(valores.length === 0) {
        alert('Inserir algum valor antes de finalizar');
    } else {
        res.innerHTML += `<p>Ao todo, temos ${totalValores()} números cadastrados</p>`;
        res.innerHTML += `<p>O Maior número informado foi ${valorMaior()}</p>`;
        res.innerHTML += `<p>O Menor número informado foi ${valorMenor()}</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${somandoTodosValores()}</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media()}</p>`;
    }
}
