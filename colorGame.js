
var numSquares =6;
var colors=[];
var pickedColor;

var squares=document.querySelectorAll(".square");



 var colorDisplay = document.getElementById("colorDisplay");

 colorDisplay.textContent=pickedColor;

 var messageDisplay =document.querySelector("#message");

 var h1 =document.querySelector("h1");

 var resetButton =document.querySelector("#reset");

 var easyBtn=document.querySelector("#easyBtn");

 var hardBtn=document.querySelector("#hardBtn");

 var modeButtons =document.querySelectorAll(".mode");

 init();
 function init(){

 	//mode button event listener
 	setUpModeButtons();
 	setUpSquares();
	reset();
 }

 function setUpModeButtons(){
 		 for(var i=0; i<modeButtons.length; i++){
	 	modeButtons[i].addEventListener("click", function(){
	 		modeButtons[0].classList.remove("selected");
	 		modeButtons[1].classList.remove("selected");
	 		this.classList.add("selected");

	 		this.textContent==="Easy" ? numSquares=3: numSquares=6;
	 		reset();
	 		// if(this.textContent==="Easy"){
	 		// 	numSquares=3;
	 		// }
	 		// else{
	 		// 	numSquares=6;
	 		// }
	 		// reset(6);

	 		//figure out how many squares to show
	 		//pick new clors
	 		//pick a new picked Color
	 		//update page to relect changes
	 	});
	 }
 }

function setUpSquares(){
	
	 for(var i =0; i<squares.length; i++){


		squares[i].addEventListener("click",function(){
			var clickedColor =this.style.backgroundColor;
			if(clickedColor===pickedColor){
				messageDisplay.textContent="Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent="Play Again?";
			}
			else{
				console.log("incorrect",clickedColor,pickedColor);
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
		});
	}
}

function reset(){

	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick neww color from random array

	pickedColor=pickColor();
	//change color display to match picked color
	colorDisplay.textContent=pickedColor;

	messageDisplay.textContent="";
	//change color of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}

	}
	h1.style.backgroundColor="#660000";
	resetButton.textContent="New Colors";

}
 // easyBtn.addEventListener("click",function(){
 // 	easyBtn.classList.add("selected");
 // 	hardBtn.classList.remove("selected");
 // 	numSquares=3;
 // 	colors=generateRandomColors(numSquares);
 // 	pickedColor=pickColor();
 // 	colorDisplay.textContent=pickedColor;

 // 	for(var i=0; i<squares.length; i++){
 // 		if(colors[i]){
 // 			squares[i].style.backgroundColor=colors[i];
 // 		}
 // 		else{
 // 			squares[i].style.display="none";
 // 		}
 // 	}

 // });

 //  hardBtn.addEventListener("click",function(){
 // 	hardBtn.classList.add("selected");
 // 	easyBtn.classList.remove("selected");
 // 	numSquares=6;
	// colors=generateRandomColors(numSquares);
 // 	pickedColor=pickColor();
 // 	colorDisplay.textContent=pickedColor;

 // 	for(var i=0; i<squares.length; i++){

 // 		squares[i].style.backgroundColor=colors[i];


 // 		squares[i].style.display="block";

 // 	}




 // });



resetButton.addEventListener("click",function(){
	reset();

})
function changeColors(color){
	//loop through all sqaures to change all squares to match given color


	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}

}
function pickColor(){
	var random=Math.floor(Math.random() *colors.length);
	return colors[random];

}
function generateRandomColors(num){
	//make an array 
	//add num random colors to array
	//return array at the end
	var arr=[];


	//repeat num times
	for(var i =0; i<num; i++){
		//get random color and push to array
		//arr.push(randomColor());
		arr[i]=randomColor();

	}

	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r =Math.floor(Math.random()*256);
	//pick green from 0 to 255
	var g =Math.floor(Math.random()*256);
	//pick blue from 0 to 255
	var b =Math.floor(Math.random()*256);
	return "rgb(" +r+", "+g+", "+b+")";
}