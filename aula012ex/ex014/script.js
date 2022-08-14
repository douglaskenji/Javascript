function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = 'rgb(192, 167, 130)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'rgb(173, 112, 46)'

    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = 'rgb(0, 72, 115)'
    }
    //testes abaixo.
    
}