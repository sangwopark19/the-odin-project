// 최소, 최대값의 범위로 난수를 생성하는 함수
function randomNumber(min = 0, max = 1) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
	let num = randomNumber(1, 3)
	let choice = '';
	switch (num) {
		case 1:
			choice = 'rock' ;
			break;
		case 2:
			choice = 'paper'
			break;
		case 3:
			choice = 'scissors'
			break;
	}
	return choice;
}

function playGame(playserSelection, computerSelection) {
	playserSelection = playserSelection.toLowerCase();
	if (playserSelection === computerSelection) {
		
	}
	console.log(playserSelection);
	console.log(computerSelection);
}

playGame('ROCK', getComputerChoice());