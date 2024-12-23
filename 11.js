const numero = parseInt(prompt("Digite um número positivo:"), 10);

if (numero > 0) {
    console.log("Números ímpares de 0 até", numero, ":");
    
    for (let i = 1; i <= numero; i += 2) {
        console.log(i);
    }
} else {
    console.log("Por favor, insira um número positivo.");
}
