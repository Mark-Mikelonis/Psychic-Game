var userGuess = " ";
		var wins = 0;
		var losses = 0;
		var guessesLeft = 9;
		var guessInd;
		var charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
		var compGuess;
		var guessArray = [];
		
		
		 compGuess = charArray[Math.floor(Math.random() * 26)];
		 document.onkeyup = function(element){
		 		userGuess = element.key;
		 		
		 		console.log("compGuess: " + compGuess);
		 	
			 	for ( var i = 0; i<charArray.length;i++){
			 		if (userGuess === charArray[i] 
			 			&& guessArray.indexOf(userGuess) === -1 
			 			&& userGuess !== compGuess){
			 			console.log(userGuess + " " + compGuess);
			 			guessesLeft--;
			 			losses++;
			 			guessArray.push(userGuess);
			 			console.log(userGuess);
			 		} else if (userGuess === compGuess){
			 			wins++;
			 			reset();
			 		}
			 	}
		 	function reset() {
		 		userGuess ="";
		 		guessesLeft = 9;
		 		guessArray = [];
		 		compGuess = charArray[Math.floor(Math.random() * 26)];
		 		console.log("compGuess: " + compGuess);
		 	}
		 	// console.log(guessArray);
		 		

			var html =
	          "<p>Wins " + wins + "</p>" +
	          "<p>Losses: " + losses + "</p>" +
	          "<p>Guesses Left: " + guessesLeft + "</p>" +
	          "<p>You guessed so far: " + guessArray.toString() + "</p>";

	        document.querySelector("#hangman").innerHTML = html; 
	    }     