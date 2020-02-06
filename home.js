function ageInDays(){
	var birthdayYear = prompt("What you were born?");
	if(birthdayYear == 0){
		alert("Please select in your birthday year");
	}else if(birthdayYear == null){
		reload();
	}else{
		var ageInDayss = (2020 - birthdayYear) * 365;
		var h3 = document.createElement('h3');
		var textNode = document.createTextNode('You are: '+ ageInDayss + ' days old');
		h3.setAttribute('id','ageInDays');
		h3.appendChild(textNode);
		document.getElementById('result').appendChild(h3);
	}
	

}
function reset(){
	document.getElementById('ageInDays').remove();
}


// challenge 2 generate cat


function generateCat(){
	var image = document.createElement('img');
	var div = document.getElementById('other');
	image.src = "img.png";
	div.appendChild(image);
}


// challenge 3 rock, paper, scissor


function rpsGame(yourChoice){
	console.log(yourChoice);
	var humenChoice, botChoice;
	humenChoice = yourChoice.id; 
	botChoice = numberToChoice(randomToRpsInt());
	console.log('Computer Choice', botChoice);
	results = decideWinner(humenChoice, botChoice);

	console.log(results);
	message = finalMessage(results);
	console.log(message);

	rpsFrontEnd(yourChoice.id, botChoice, message);
}

	function randomToRpsInt(){
		return Math.floor(Math.random() * 3);
	}


	function numberToChoice(number){
		return ['rock', 'paper', 'scissors'][number]; 
	}

	function decideWinner(yourChoice, computerChoice){
		var rpsDatabase = {
			'rock'     : {'scissors' : 1, 'rock' : 0.5, 'paper' : 0},
			'paper'    : {'rock': 1, 'paper': 0.5, 'scissors' :0},
			'scissors' : {'paper' : 1, 'scissors': 0.5, 'rock' : 0}
		}

		var yourScore = rpsDatabase[yourChoice][computerChoice];
		var computerScore = rpsDatabase[computerChoice][yourChoice];
  
  		return [yourScore, computerScore]; 

	}
	function finalMessage([yourScore, computerScore]){

		if(yourScore === 0){
			return {'message' : 'You Lost!', 'color': 'red'};
		}
		else if(yourScore === 0.5){
			return {'message' : 'You Tied!', 'color' : 'yellow'};
		}else{
			return {'message' : 'You won!', 'color' : 'green'};
		}

	}

	function rpsFrontEnd(humenImageChoice, botImageChoice, finalMessage){
		var imageDatabase = {
			'rock' : document.getElementById('rock').src,
			'paper' : document.getElementById('paper').src,
			'scissors' : document.getElementById('scissors').src
		}

		document.getElementById('rock').remove();
		document.getElementById('paper').remove();
		document.getElementById('scissors').remove();


		humenDiv = document.createElement('div');
		botDiv = document.createElement('div');
		messageDiv = document.createElement('div');

		humenDiv.innerHTML = "<img style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);' src='"+ imageDatabase[humenImageChoice] +"'/>";

		messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] +"; font-size: 60px; margin: 25px; padding: 30px;'>" + finalMessage['message'] + "</h1>"; 

		botDiv.innerHTML = "<img style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);' src='"+ imageDatabase[botImageChoice] +"'/>";

		document.getElementById('another').appendChild(humenDiv);
		document.getElementById('another').appendChild(messageDiv);	
		document.getElementById('another').appendChild(botDiv);

 	}



 	// Challenge : 4 Change the color of all button

 	var allButton = document.getElementsByTagName('button');
 	console.log(allButton);


 	var copyAllButton = []; 
 	for (let i = 0; i < allButton.length; i++) {
 		copyAllButton.push(allButton[i].classList[1]);
 	}
 	console.log(copyAllButton);


 	function buttonColorChange(buttonThingy){
 		if(buttonThingy.value === 'red'){
 			buttonRed();
 		}else if(buttonThingy.value === 'green'){
 			buttonGreen();
 		}else if(buttonThingy.value === 'random'){
 			randomButton();
 		}else if(buttonThingy.value ===  'reset'){
 			resetButton();
 		}
 	}

 	function buttonRed(){
 		for(var i=0; i<allButton.length; i++){
 			allButton[i].classList.remove(allButton[i].classList[1]);
 			allButton[i].classList.add('btn-danger');

 		}
 	}

 	function buttonGreen(){
 		for(var i=0; i<allButton.length; i++){
 			allButton[i].classList.remove(allButton[i].classList[1]);
 			allButton[i].classList.add('btn-success');

 		}
 	}

 	function resetButton(){
 		for(var i=0; i < allButton.length; i++){
 			allButton[i].classList.remove(allButton[i].classList[1]);
 			allButton[i].classList.add(copyAllButton[i]);
 		}
 	}

 	function randomButton(){
 		var choice = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning'];

 		for (var i = 0; i < allButton.length; i++) {
 			var randomNumber = Math.floor(Math.random() * 4);
 			allButton[i].classList.remove(allButton[i].classList[1]);
 			allButton[i].classList.add(choice[randomNumber]);
 		}
 	}