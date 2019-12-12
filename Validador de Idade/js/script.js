var anoNascimento = document.querySelector('#anoNascimento');
var tipoSexo = document.getElementsByName('gender');
var resposta = document.querySelector('#resposta');
var trocaImagem = document.querySelector('#img');

function idade() {
    var dataAtual = new Date;
    var anoAtual = dataAtual.getFullYear();
    var nascimento = Number(anoNascimento.value);
    var idade = anoAtual - nascimento;

    if (idade > 120 || idade < 0) {
        return alert('Data de Nascimento Inválida!');
    } else {
        return resposta.innerHTML = idade;
    }
}

function fotoIdade() {
    if (idade() < 2) {
        return 
    }
}

/*
function sexoPessoa() {
    if (tipoSexo[0].cheked == null || tipoSexo[1].cheked == null) {
        alert('Sexo não informado!')
        return false
    } 
    return true
}
*/

function mudarFoto() {
    idade();
}