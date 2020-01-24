let player = {
  hp: 100,
  attack: 20,
  defense: 20
};
let slime = {
  hp: 5,
  attack: 2,
  defense: 0
};
let cyborg = {
  hp: 50,
  attack: 10,
  defense: 20
};

//make our attack button
const playerBox = document.getElementById("player-box");
const attackButton = document.createElement("button");
attackButton.innerText = "Attack";
playerBox.appendChild(attackButton);


const playerHp = document.getElementById('player-hp');
playerHp.innerText = player.hp;



//make enemy attack button
const enemyBox = document.getElementById("enemy-box");
const enemyAttackButton = document.createElement("button");
enemyAttackButton.innerText = "Attack";
enemyBox.appendChild(enemyAttackButton);

const enemyHp = document.getElementById('enemy-hp');
enemyHp.innerText = cyborg.hp

//add listener to our attack button
attackButton.addEventListener("click", () => {
  cyborg.hp -= player.attack * (1 - cyborg.defense / 100);
  enemyHp.innerText = cyborg.hp;
});

//add listener to enemy attack button
enemyAttackButton.addEventListener("click", () => {
  player.hp -= cyborg.attack * (1 - player.defense / 100);
  playerHp.innerText = player.hp;
});
