function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERROR_404] Verifique os dados e tente novamente!')
    } else {
        var gen = document.getElementsByName('txtgen')
        var idade = ano - Number(fAno.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (gen[0].checked) {
            se = 'Homem'
            if (idade >= 0 && idade < 10) {
                //He's a kid.
                img.setAttribute('src', 'imagens/baby-groot.png')
            } else if (idade < 18) {
                //He's a teen.
                img.setAttribute('src', 'imagens/robin.png')
            } else if (idade < 55) {
                // He's an adult.
                img.setAttribute('src', 'imagens/superman.png')
            } else {
                // He's a Mr.
                img.setAttribute('src', 'imagens/thomas-wayne.png')
            }
        } else if (gen[1].checked) {
            se = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //She's a kid.
                img.setAttribute('src', 'imagens/girl.png')
            } else if (idade < 18) {
                //She's a teen.
                img.setAttribute('src', 'imagens/batgirl.png')
            } else if (idade < 55) {
                // She's an adult.
                img.setAttribute('src', 'imagens/wonder-woman.png')
            } else {
                // She's a Mrs.
                img.setAttribute('src', 'imagens/madame-teia.png')
            }
        }
        res.innerHTML = `${se} de ${idade} anos!`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}