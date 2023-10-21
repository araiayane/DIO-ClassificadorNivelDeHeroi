let userName = prompt("Qual o nome do herói?");
let xp = prompt("E o nível do herói?");

if (xp <= 1000) {
  nivel = "Ferro";
} else if (xp > 2001 && xp <5000) {
  nivel = "Prata";
} else if (xp > 5001 && xp <7000) {
  nivel = "Ouro";
} else if (xp > 7001 && xp <8000) {
  nivel = "Platina";
} else if (xp > 8001 && xp <9000) {
  nivel = "Ascendente";
} else if (xp > 9001 && xp <10000) {
  nivel = "Imortal";
} else if (xp >= 10001) {
  nivel = "Radiante";
} 

alert("O héroi " + userName + " está no nível " + nivel)