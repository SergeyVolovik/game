let userName = prompt("Player name is(max-letters = 10): ", "");
let userPoint = 0;
let aiPoint = 0;
const rockChoice = document.getElementById("r");
const paperChoice = document.getElementById("p");
const scissorsChoice = document.getElementById("s");
const userPointSection = document.getElementById("userPoint");
const aiPointSection = document.getElementById("compPoint");
const sectionUserName = document.querySelector(".user");
const sectionTextResult = document.querySelector("#textResult>p");


function checkUserName() 
{
	if(userName == "" || userName == +userName || userName.length >10)
	{
		alert("Sorry, your name is long: or can't be a number: or empty.");
		userName = "UserName";  
		sectionUserName.innerHTML = userName; 
	}else 
	{
		sectionUserName.innerHTML = userName;
	}
}

function computerChoise()
{
	const choises = ['r', 'p', 's'];
	const randomChoise = Math.floor(Math.random() * 3);
	return choises[randomChoise];
}

function convertToWord (letter) 
{
	if(letter == 'r')
	{
		return "Rock";
	} else if (letter == 'p')
	{
		return "Paper";
	} else 
	{
		return "Scissors";
	}
}

function win(userChoice, resultAiCoise) {
	userPoint++;
	userPointSection.innerHTML = userPoint;
	aiPointSection.innerHTML = aiPoint;
	document.getElementById(userChoice).classList.add('winner__color');
	setTimeout(function(){
		document.getElementById(userChoice).classList.remove('winner__color');
	}, 400);
	sectionTextResult.innerHTML = userName + " is <strong>WINNER</strong>! " 
	+ '<br>' + userName + " choose: " + convertToWord(userChoice) + '<br>' 
	+ "AI(COM) choose: " + convertToWord(resultAiCoise);
}

function lost(userChoice, resultAiCoise) {
	aiPoint++;
	userPointSection.innerHTML = userPoint;
	aiPointSection.innerHTML = aiPoint;
	document.getElementById(userChoice).classList.add('loser__color');
	setTimeout(function(){
		document.getElementById(userChoice).classList.remove('loser__color');
	}, 400);
	sectionTextResult.innerHTML = userName + " is LOSER! AI(COM) is <strong>WINNER!</strong>"
	+ '<br>' + userName + " choose: " + convertToWord(userChoice) + '<br>' 
	+ "AI(COM) choose: " + convertToWord(resultAiCoise);
}

function draw(userChoice, resultAiCoise) 
{
	userPointSection.innerHTML = userPoint;
	aiPointSection.innerHTML = aiPoint;
	document.getElementById(userChoice).classList.add('draw__color');
	setTimeout(function(){
		document.getElementById(userChoice).classList.remove('draw__color');
	}, 400);
	sectionTextResult.innerHTML = "<strong>DRAWWW!</strong> TRY AGAIN! "+ '<br>' 
	+ userName + " choose: " +	convertToWord(userChoice) + '<br>' 
	+ "AI(COM) choose: " + convertToWord(resultAiCoise);
}

function choiceItem(userChoice)
{
	let resultAiCoise = computerChoise();
	switch(userChoice + resultAiCoise) 
	{
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, resultAiCoise);
			break;


		case "rp":
		case "ps":
		case "sr":
			lost(userChoice, resultAiCoise);
			break;


		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, resultAiCoise)
			break;
	}

}

function main()
{	
	checkUserName();
	
	rockChoice.addEventListener('click', function(){
		choiceItem("r");
	});

	paperChoice.addEventListener('click', function(){
		choiceItem("p");
	});

	scissorsChoice.addEventListener('click', function(){
		choiceItem("s");
	});

}

main();