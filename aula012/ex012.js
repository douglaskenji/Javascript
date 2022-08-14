var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()
console.log(`Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos`)
if (hora < 12) {
    console.log(`Bom dia`)
} else if (hora > 18) {
    console.log(`Boa noite`)
} else {
    console.log(`Boa tarde`)
}