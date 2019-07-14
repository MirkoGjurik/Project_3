$(function () {  
let squaresNumber = 6;
let colors = generateRandomColors(squaresNumber);
let squares = document.querySelectorAll(".square");
let colorRandom = pickRandomColor();
let rightWrong = document.querySelector("#message");
let mode = document.querySelectorAll(".mode");

for(let i = 0; i < mode.length; i++){
	mode[i].addEventListener("click", function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy"){
			squaresNumber = 2;
		} else {
			squaresNumber = 6;
		}
		reset();
	})
}

function reset() {
	colors = generateRandomColors(squaresNumber);
	colorRandom = pickRandomColor();
	message.innerHTML = "";
	spancolor.innerHTML = colorRandom;
	resetColor.innerHTML = "New Colors";
	rightWrong.classList.remove("wrong");
	rightWrong.classList.remove("correct");
	document.querySelector("h1").style.background = "steelblue";
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

for(let i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function() {		
		let clickedColor = this.style.background;

		if(clickedColor === colorRandom){
			rightWrong.innerHTML = "You won";
			changeColors(clickedColor);
			rightWrong.classList.remove("wrong");
			rightWrong.classList.add("correct");
			document.querySelector("h1").style.background = clickedColor;
			resetColor.innerHTML = "Play Again...";
		} else {
			this.style.display = "none";
			rightWrong.classList.add("wrong");
			rightWrong.innerHTML = "Try Again";
		}
	});
}

let spancolor = document.querySelector("#colorDisplay");
spancolor.innerHTML = colorRandom;
let resetColor = document.querySelector("#reset");

resetColor.addEventListener("click", function(){
	reset();
})

function pickRandomColor() {
	let random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function changeColors(color) {
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function generateRandomColors(num) {
	let arr = [];

	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
};
})