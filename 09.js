const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
const peso = parseFloat(prompt("Digite seu peso em quilogramas (ex: 70):"));

if (altura > 0 && peso > 0) {
    const imc = peso / (altura * altura);
    console.log("Seu IMC é:", imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Classificação: Abaixo do peso.");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Classificação: Peso normal.");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Classificação: Sobrepeso.");
    } else {
        console.log("Classificação: Obesidade.");
    }
} else {
    console.log("Por favor, insira valores válidos para altura e peso.");
}