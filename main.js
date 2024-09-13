let ball = null;
let frame = document.getElementById("frame");
// let maxLeft = frame.offsetWidth - ball.offsetWidth;
// let maxTop = frame.offsetHeight - ball.offsetHeight;
// ball = document.getElementById("ball");

function init() {
	ball = document.getElementById("ball");
	ball.style.position = "relative";
	ball.style.left = "0px";
	ball.style.top = "0px";
}
function moveRight() {
	event.preventDefault();
	let ballLeft = parseInt(ball.style.left) || 0;
	let ballWidth = ball.offsetWidth;
	let frameWidth = frame.offsetWidth;

	if (ballLeft + ballWidth + 50 <= frameWidth) {
		ball.style.left = ballLeft + 50 + "px";
	}
}
function moveDown() {
	event.preventDefault();
	let ballTop = parseInt(ball.style.top) || 0;
	let ballHeight = ball.offsetHeight;
	let frameHeight = frame.offsetHeight;

	if (ballTop + ballHeight + 50 <= frameHeight) {
		ball.style.top = ballTop + 50 + "px";
	}
}
function moveUp() {
	event.preventDefault();
	let ballTop = parseInt(ball.style.top) || 0;

	if (ballTop - 50 >= 0) {
		ball.style.top = ballTop - 50 + "px";
	}
}
function moveLeft() {
	event.preventDefault();
	let ballLeft = parseInt(ball.style.left) || 0;

	if (ballLeft - 50 >= 0) {
		ball.style.left = ballLeft - 50 + "px";
	}
}
window.onload = init;
