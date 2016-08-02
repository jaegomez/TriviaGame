$(document).ready(function(){
	// this is where all my questions are along with their corresponding index number
	var questions = [{
		question: "Who killed Danny?",
		choices: ["Meg", "Eric", "Marco", "John"],
		correctAnswer: 3
	}, {
		question: "Which sibling of the Rayburn family is the oldest?",
		choices:["John", "Meg", "Danny", "Kevin"],
		correctAnswer: 2
	}, {
		question: "What kind of shell was used to kill the Hitman coming after Danny in the Motel?",
		choices: ["Bittersweet Clam", "Conch Shell", "Button Shell", "Clam Shell"],
		correctAnswer: 1
	}, {
		question: "What happened to Danny's restaurant?",
		choices: ["Bankruptcy", "Sold It", "Burned Down", "Closed due to Health Inspections"],
		correctAnswer: 2
	}, {
		question: "In which key of the Florida Keys was the Rayburn House Resort located on?",
		choices: ["Key Largo", "Lower Matacumbe Key", "Key West", "Marathon"],
		correctAnswer: 1
	}, {
		question: "How did Sarah die?",
		choices: ["Car Accident", "Drowned", "Stroke Under Water", "Fell Off A Boat"],
		correctAnswer: 1
	}, {
		question: "Who shows up in the last episode of Season 1",
		choices: ["Dannys Wife", "Dannys Friend", "Dannys Dog", "Dannys Son"],
		correctAnswer: 3
	}, {
		question: "What are the names of John's kids",
		choices: ["Mike & Eva", "Anthony & Isabella", "Jane & Ben", "Sam & Christina"],
		correctAnswer: 2
	}, {
		question: "Where did Meg move to?",
		choices: ["New York", "Atlanta", "Boston", "California"],
		correctAnswer: 0
	}, {
		question: "What was Danny transporting?",
		choices: ["Marijuana", "Cocaine", "LSD", "Humans"],
		correctAnswer: 1
	}, {
		question: "What was John running for at the end of Season 1?",
		choices: ["Mayor", "President", "Detective", "Sherrif"],
		correctAnswer: 3
	}];

	//cant find the right sounding audio file that will fit my theme
	//var audio = new Audio('assets/audio/');
	// audio.play();	

	var timeClock = 0;
	//only ten second timer
	var maxTime = 11;
	var right = 0;
	var wrong = 0;
	var questionCounter = 0;

	$(".triviaQbox").hide();
	$(".restartButton").hide();
	$(".startButton").click(function(){
		$(".startButton").hide();
		$(".triviaQbox").show();
		$(".restartButton").show();
		start();
		restartGame();
		//audio.play();
	});
	// created restart function that will showQ when clicked restart and will set all variables back to zero
	function restartGame(){
		restart();
		right = 0;
		wrong = 0;
		questionCounter = 0;
		showQ();
	}

	$(".restartButton").on( "click", function() {
		$(".triviaQbox").hide();
		$(".restartButton").hide();
		$(".startButton").show();
		stop();
		restart();
		clearFunction();
		
 	});
	// this function shows the question 
	function showQ(){
		$("#question").html(questions[questionCounter].question);
		$("#choiceUno").html(questions[questionCounter].choices[0]);
		$("#choiceDos").html(questions[questionCounter].choices[1]);
		$("#choiceTres").html(questions[questionCounter].choices[2]);
		$("#choiceCuatro").html(questions[questionCounter].choices[3]);
	}
	// clears the questions to nothing with the empty html
	function clearFunction (){
 		$("#question").html("");
		$("#choiceUno").html("");
		$("#choiceDos").html("");
		$("#choiceTres").html("");
		$("#choiceCuatro").html("");
 	}
 	// function hides my time variables and just displays the amount of right and wrong answers 
 	// which replace the choiceUno and choiceDos ids and the others are put as empty
	function displayGameOver(){
		$("#time").hide();
		$("#timeRemaining").hide();
		$("#question").html("Your Score");
		$("#choiceUno").html("Correct Answers: " + right);
		$("#choiceDos").html("Incorrect Answers:" + wrong);
		$("#choiceTres").html("");
		$("#choiceCuatro").html("");
	}

	// if choice one is clicked handleAnswer index 0  is the asnwer
	$("#choiceUno").on( "click", function() {
		handleAnswer(0);
 	});
	// if choice two is clicked handleAnswer index 1 is the asnwer
	$("#choiceDos").on( "click", function() {
		handleAnswer(1);
 	});
	// if choice three is clicked handleAnswer index 2  is the asnwer
 	$("#choiceTres").on( "click", function() {
		handleAnswer(2);
 	});
 	// if choice four is clicked handleAnswer index 3  is the asnwer
	$("#choiceCuatro").on( "click", function() {
		handleAnswer(3);
 	});

	// handles answers and determines wether the game is over and if you click on the restart button and to see if answer is correct or wrong
	function handleAnswer(toCheck){
		// check to see if game is already over
		if (questions.length <= questionCounter){
			return;
		}
		if(toCheck === questions[questionCounter].correctAnswer){
			right++;
		} else {
			wrong++;
		}
		restart();
		questionCounter++;
		if (questions.length <= questionCounter){
			stop();
			displayGameOver();
		} else {
			showQ();
		}
	}

	// starts my timer 
	function start (){
		counter = setInterval(decrement, 1000)
	}
		function decrement(){
			timeClock--;
			$("#time").html(timeClock);
			if(timeClock==0){
				handleAnswer(-1);
			}
		}
	function stop(){
		clearInterval(counter);
	}
	function restart(){
		timeClock = maxTime;
		decrement();
	}
});