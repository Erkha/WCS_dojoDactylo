let score = 0;
let gameTime = 0;
let intervalID;


function timer() {
  intervalID = setInterval(showTimer, 1000);
	document.getElementById("word").innerText = liste[0];
}

function showTimer() {
  gameTime += 1;
  document.getElementById("gameTimer").innerText = gameTime;
  if (gameTime > 30) {
  	clearInterval(intervalID);
   	document.getElementById("gameTimer").innerText = "finished";
   	document.getElementById("saisie").disabled = "disabled";
 	}
}
 
function game(){
	if (liste[score] === document.getElementById("saisie").value) {
		score += 1;
		document.getElementById("word").innerText = liste[score];
		document.getElementById("saisie").value = "";
		document.getElementById("score").innerText = score;
	}
 }




