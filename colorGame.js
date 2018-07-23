var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")
// add in a how to play button


init();

function init(){
	//mode buttons event listeners
	setupModeButtons();	
	setupSquares();
	reset();

}

function setupModeButtons(){
	for(var i=0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
	}
}

function setupSquares(){
	for (var i=0; i < squares.length; i++){ 
	// add event listenter to squares
		squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent ="Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else{
				this.style.backgroundColor = "#232323";			
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}
//this should probably be put somewhere
resetButton.addEventListener("click", function(){
	reset();
})

function reset (){
	//generate all new colors
	colors = generateRandomColors(numSquares); 
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pckedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	hideBlocks();
	//change colors of squares
	h1.style.backgroundColor = "steelblue";
}


function hideBlocks(){
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	};
}	

function changeColors(color){
	//loop through all squares
	for(var i =0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[]
	//add num random colors to array
	for (var i =0; i < num; i++){
		//get random color & push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green
	var g = Math.floor(Math.random() * 256);
	//pick a blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
