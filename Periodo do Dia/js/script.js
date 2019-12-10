function carregar() {
    
    var tempo = document.getElementById('tempo');
    var img = document.getElementById('image')
    var horario = new Date;

    hora =  horario.getHours();
    minutos = horario.getMinutes();
    
    tempo.innerHTML = (`${hora}:${minutos}`);

    if (hora < 12) {
        img.src = '..\img\manha.png';
        document.body.style.backgroundColor = '#b3e6ff';
    } else if (hora < 18) {
        img.src = '..\img\tarde.png';
        document.body.style.backgroundColor = '#d9ffb3';
    } else {
        img.src = '..\img\noite.png'
        document.body.style.backgroundColor = '#666666';
    }

}






