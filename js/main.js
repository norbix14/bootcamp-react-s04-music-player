document.addEventListener('DOMContentLoaded', () => {
	const btnPlayer = Array.from(document.querySelectorAll('span > i.btn-player'));

	document.querySelector('.like').addEventListener('click', e => e.target.classList.toggle('liked'));

	btnPlayer.forEach(btn => {
		btn.addEventListener('click', () => {
			document.querySelector('.play').classList.toggle('d-none');
			document.querySelector('.pause').classList.toggle('d-none');
		});
	});

});
