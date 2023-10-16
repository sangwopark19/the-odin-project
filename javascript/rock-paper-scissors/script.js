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

// 가위바위보 숫자로 변환
function strToInt(str) {
	let result = 0;
	switch (str) {
		case 'rock':
			result = 1;
			break;
		case 'paper':
			result = 2;
			break;
		case 'scissors':
			result = 3;
			break;
	}
	return result;
}

// 3<1<2 이기는 경우 -2, 1, 1 지는경우 -1, -1, 2
// 1<2<3
// 2<3<1
// 가위바위보 1 라운드
function playRound(playserSelection, computerSelection) {
	playserSelection = playserSelection.toLowerCase();
	let result;
	if (playserSelection === computerSelection) {
		result = 'Draw';
	} else {
		let you = strToInt(playserSelection);
		let com = strToInt(computerSelection);
		if (you - com === -2 || you - com === 1) {
			result = 'Win';
		} else if (you - com === -1 || you - com === 2) {
			result = 'Lose';
		}
	}
	return 'Your ' + result + '! ' + capitalize(computerSelection) + ' beats ' + capitalize(playserSelection)
}

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(prompt(), getComputerChoice()));
	}
}

game();

