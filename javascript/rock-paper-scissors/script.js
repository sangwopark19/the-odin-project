// 최소, 최대값의 범위로 난수를 생성하는 함수
function randomNumber(min = 0, max = 1) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumber(1, 3));