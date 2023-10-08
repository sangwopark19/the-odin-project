// 최소, 최대값의 범위로 난수를 생성하는 함수
function randomNumber(min = 0, max = 1) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
	let num = randomNumber(1, 3)
	let choice = '';
	switch (num) {
		case 1:
			choice = 'Rock' ;
			break;
		case 2:
			choice = 'Paper'
			break;
		case 3:
			choice = 'Scissors'
			break;
	}
	return choice;
}

console.log(getComputerChoice());