const menu = prompt("Escolha um prato do menu: pizza, hambúrguer, salada, macarrão:").toLowerCase();

switch (menu) {
    case "pizza":
        console.log("Você escolheu Pizza. Preço: R$ 25,00. Descrição: Uma pizza com queijo e molho de tomate.");
        break;
    case "hambúrguer":
        console.log("Você escolheu Hambúrguer. Preço: R$ 20,00. Descrição: Hambúrguer com alface, tomate e molho especial.");
        break;
    case "salada":
        console.log("Você escolheu Salada. Preço: R$ 15,00. Descrição: Uma salada fresca com folhas verdes, tomates e cenouras.");
        break;
    case "macarrão":
        console.log("Você escolheu Macarrão. Preço: R$ 18,00. Descrição: Macarrão ao molho branco com pedaços de frango.");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha um prato do menu.");
}
