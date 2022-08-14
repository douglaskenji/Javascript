function contar() {
    var ini = document.getElementById('txti')
    var end = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var r = document.getElementById('res')
    
    if (ini.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        alert(`ERRO, faltam dados. `)
        r.innerHTML = `Preparando a contagem...`
    } else {
        r.innerHTML = `Contando: <br>`
        var i = Number(ini.value)
        var e = Number(end.value) 
        var p = Number(pass.value)
       if (p <= 0) {
        alert('Passo inválido! Considerando passo = 1')
        p = 1 
       }
        if (i < e) {
        //contagem crescente.    
        for(let c = i; c <= e; c += p) {
                r.innerHTML += `${c} \u{27A1} `
            }          
       } else {
        //contagem regressiva.    
        for(let c = i; c >= e; c-= p) {
                r.innerHTML += `${c} \u{27A1}`
            }
       }
       r.innerHTML += `\u{262F}`
    }
}