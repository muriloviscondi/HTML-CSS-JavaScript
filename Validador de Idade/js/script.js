function mudarFoto() {
    
    var dataAtual = new Date;
    var anoAtual = dataAtual.getFullYear();
    var anoNascimento = document.querySelector('#anoNascimento');
    var tipoSexo = document.getElementsByName('gender');
    var resposta = document.querySelector('#resposta');
    var img = document.querySelector('#image');
    
    var nascimento = Number(anoNascimento.value);
    var idade = anoAtual - nascimento;
    
    if (idade > 120 || idade < 0) {
        alert('Data de Nascimento Inválida!');
    
    } else if (idade < 2 && tipoSexo[0].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/01%20-%20baby-boy.png?raw=true';
        
    } else if (idade < 2 && tipoSexo[1].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/01%20-%20baby-girl.png?raw=true';
    
    } else if (idade < 10 && tipoSexo[0].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/02%20-%20boy.png?raw=true';
        
    } else if (idade < 10 && tipoSexo[1].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/02%20-%20girl.png?raw=true';
    
    } else if (idade < 18 && tipoSexo[0].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/03%20-%20teenager-boy.png?raw=true';
        
    } else if (idade < 18 && tipoSexo[1].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/03%20-%20teenager-girl.png?raw=true';
    
    } else if (idade < 30 && tipoSexo[0].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/04%20-%20adult-man.png?raw=true';
    
    } else if (idade < 30 && tipoSexo[1].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/04%20-%20adult-woman.png?raw=true';

    } else if (idade <= 50 && tipoSexo[0].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/05%20-%20almostold-adult-man.png?raw=true';
    
    } else if (idade <= 50 && tipoSexo[1].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/05%20-%20almostold-adult-woman.png?raw=true';
            
    } else if (idade > 50 && tipoSexo[0].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/06%20-%20old-man.png?raw=true';
    
    } else if (idade > 50 && tipoSexo[1].checked) {
        resposta.innerHTML = `Nascido no ano ${nascimento} tem ${idade} anos`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/06%20-%20old-woman.png?raw=true';
    
    } else {
        resposta.innerHTML = `Idade Indefinida`;
        img.src = 'https://github.com/muriloviscondi/HTML-CSS-JavaScript/blob/master/Validador%20de%20Idade/img/Artboard%201.png?raw=true';
    }
    
}
