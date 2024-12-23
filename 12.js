const fatorialNumero = parseInt(prompt("Digite um número para calcular o fatorial:"), 10);

if (fatorialNumero >= 0) {
    let fatorial = 1;
    for (let i = 1; i <= fatorialNumero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${fatorialNumero} é: ${fatorial}`);
} else {
    console.log("Por favor, insira um número não negativo.");
}
