const plus = document.querySelector('.plus');
plus.addEventListener('animationend', () => {
	plus.classList.remove('rotation');
	plus.offsetWidth;
	plus.classList.add('rotation');

});

function changeSubtitle() {
	const websiteSubtitles = [
		{ text: 'Новости', color: '#00ff19' },
		{ text:	'Эфир', color: '#00ffff' },
		{ text: 'Люди', color: '#2764ff' },
		{ text: 'Спорт', color: '#ff0000' },
		{ text: 'Art', color: '#fa00ff' }
	];
	const websiteSubtitle = document.querySelector('.website-title__subtitle');

	let i = 0;
	let timer = setInterval(function () {
		if (i == websiteSubtitles.length - 1) {
			i = 0;
			websiteSubtitle.textContent = websiteSubtitles[i].text;
			websiteSubtitle.style.webkitTextStrokeColor = websiteSubtitles[i].color;
		} else {
			i++;
			websiteSubtitle.textContent = websiteSubtitles[i].text;
			websiteSubtitle.style.webkitTextStrokeColor = websiteSubtitles[i].color;
		}
	}, 3000);
}

changeSubtitle();
