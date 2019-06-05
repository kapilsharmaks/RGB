var numSquares = 6;
var colors = [];
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init(); 

function init(){
	
for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}
		reset();
	});
}
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function(){
	var clickedColor = this.style.backgroundColor;

	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "correct";
		changeColors(clickedColor);
		h1.style.backgroundColor = pickedColor;
		resetButton.textContent = "Play Again?";
	}
	else{
		this.style.backgroundColor = "black";
		messageDisplay.textContent = "try again";
	}

	});
	reset();
}
}

function reset(){
		//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new color from an array
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";		
		}
	}

	h1.style.backgroundColor = "steelblue";
}
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 		squares[i].style.backgroundColor = colors[i];
// 		} else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
});
function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;	
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
} 

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
