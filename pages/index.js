const websiteSubtitles = [
	{ text: 'Новости', color: '#00ff19' },
	{ text:	'Эфир', color: '#00ffff' },
	{ text: 'Люди', color: '#2764ff' },
	{ text: 'Спорт', color: '#ff0000' },
	{ text: 'Art', color: '#fa00ff' }
];
const websiteSubtitle = document.querySelector('.website-title__subtitle');

function getRandomElement(arr) {
	let randIndex = Math.floor(Math.random() * arr.length);
	return arr[randIndex];
}

setInterval(function() {
	let randomElement = getRandomElement(websiteSubtitles);
	websiteSubtitle.textContent = randomElement.text;
	websiteSubtitle.style.webkitTextStrokeColor = randomElement.color;
		}, 3000);


anime({
	targets: '.website-title .website-title__subtitle',
	translateY: -100,
	loop: true,
	delay: 2500,
	easing: 'linear',
	duration: 500,
});