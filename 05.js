const numero = parseInt(prompt("Digite um número positivo:"), 10);

if (numero >= 0) {
    console.log(`Números pares de 0 até ${numero}:`);
    let i = 0;
    while (i <= numero) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
} else {
    console.log("Por favor, insira um número positivo.");
}