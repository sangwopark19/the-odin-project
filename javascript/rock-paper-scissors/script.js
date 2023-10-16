// 최소, 최대값의 범위로 난수를 생성하는 함수
function randomNumber() {
	return Math.floor(Math.random() * 3) + 1;
}

// 컴퓨터 가위바위보 가져오기
function getComputerChoice() {
	let num = randomNumber();
	let choice = '';
	switch (num) {
		case 1:
			choice = 'rock';
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
// 첫 글자 대문자로 변경
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// 가위바위보 결과 출력
function playRound(playserSelection, computerSelection) {
	playserSelection = playserSelection.toLowerCase();
	return 'Your Lose! ' + capitalize(computerSelection) + ' beats ' + capitalize(playserSelection)
}

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(prompt(), getComputerChoice()));
	}
}

game();

