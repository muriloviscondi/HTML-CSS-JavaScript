alert('fucinona')

function carregar() {
    
    var tempo = document.getElementById('tempo');
    var img = document.getElementById('image')
    var horario = new Date;

    hora =  13 //horario.getHours();
    minutos = horario.getMinutes();
    tempo.innerHTML = (`${hora}:${minutos}`);

    if (hora < 12) {
        img.src = 'C:\xampp\htdocs\Curso em Video\JavaScript\ex013aula12\img\manha.png';
    } else if (hora < 18) {
        img.src = 'C:\xampp\htdocs\Curso em Video\JavaScript\ex013aula12\img\tarde.png';
    } else {
        img.src = 'C:\xampp\htdocs\Curso em Video\JavaScript\ex013aula12\img\noite.png'
    }

}






