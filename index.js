//Nome do herói + experiência:

var nomeDoHeroi = "Mestre Felipão";
var experiencia = 10001;

// Estrutura de decisão:
var nivelDoHeroi;

if (experiencia < 1000) {
    nivelDoHeroi = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivelDoHeroi = "Prata";
} else if (experiencia >= 6001 && experiencia <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivelDoHeroi = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Mensagem de saída:
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".");