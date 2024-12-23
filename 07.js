const lado1 = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"));
const lado2 = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"));
const lado3 = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Triângulo equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Triângulo isósceles.");
    } else {
        console.log("Triângulo escaleno.");
    }
} else {
    console.log("Os valores informados não formam um triângulo válido.");
}
