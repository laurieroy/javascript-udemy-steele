var button_player1=document.getElementsByTagName("button")[0];
var button_player2=document.getElementsByTagName("button")[1];
var button_reset=document.getElementsByTagName("button")[2];
var displayP1Score = document.querySelector("#displayP1score");
var displayP2Score = document.querySelector("#displayP2score");
var numInput = document.querySelector("input[type=number]");
var p = document.querySelector("p");
var displayWinningScore = document.querySelector("p span");
var score_player1 = 0;
var score_player2 = 0;
var score_end =5;
var gameOver = false;

//refactor. also add in rule that score_end entry be >0

button_player1.addEventListener("click", function(){
	if(!gameOver){
		score_player1++;
		if(score_player1===score_end){
			displayP1Score.classList.add("winner");
			gameOver = true;
		}
		displayP1Score.textContent = score_player1;
	}
	
});

button_player2.addEventListener("click", function(){
	if(!gameOver){
		score_player2++;
		if(score_player2===score_end){
			displayP2Score.classList.add("winner");
			gameOver = true;
		}
	displayP2Score.textContent = score_player2;
	}
})
button_reset.addEventListener("click", function(){
	reset();
});

function reset(){
	score_player1=score_player2=0;
	displayP1Score.textContent=displayP2Score.textContent=0;
	displayP1score.classList.remove("winner");
	displayP2score.classList.remove("winner");
	gameOver = false;
}
numInput.addEventListener("change", function(){
	displayWinningScore.textContent = this.value;
	score_end = Number(this.value);
	reset();
});