const numeroSecreto = Math.floor(Math.random() * 101);
let tentativas = 10;
let acertou = false;

console.log("Bem-vindo ao jogo de adivinhação! Você tem 10 tentativas para adivinhar o número secreto entre 1 e 100.");

while (tentativas > 0 && !acertou) {
    const palpite = parseInt(prompt(`Você tem ${tentativas} tentativa(s) restante(s). Digite seu palpite:`), 10);

    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou o número secreto!");
        acertou = true;
    } else if (palpite < numeroSecreto) {
        console.log("O número secreto é maior. Tente novamente.");
    } else {
        console.log("O número secreto é menor. Tente novamente.");
    }

    tentativas--;
}

if (!acertou) {
    console.log(`Você esgotou suas tentativas. O número secreto era: ${numeroSecreto}`);
}