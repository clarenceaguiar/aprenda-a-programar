let multiplicador = 9
let n = 10
let i = 1
console.log("Tabuada de " + multiplicador)
while(i <= n) {
    let calculoTabuada = multiplicador * i
    let textoDeExibicao = `${multiplicador} X ${i} = ${calculoTabuada}`
    console.log(textoDeExibicao)
    i++
}