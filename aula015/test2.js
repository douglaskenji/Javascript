
var rock = ['Nirvana', 'AC/DC', 'Metallica', 'Queen']
/*
for(var r=0; r < rock.length; r++) {
    console.log(`O ${r} é ${rock[r]}.`)
}

for(var k in rock) {
    console.log(`O ${k} é ${rock[k]}`)
}

var dumb = rock.indexOf('Metallica')
console.log(`${dumb}`)
*/
var acdc = rock.indexOf('AC/DC')
if (acdc == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor é ${acdc}`)
}