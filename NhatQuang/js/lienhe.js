document.querySelectorAll('.tab-wrapper').forEach((tabWrapper) => {
	const tabs = tabWrapper.querySelector('.tabs');
	const tabContents = document.querySelector('.tab-contents');

	tabs.querySelectorAll('.tab').forEach((tab, index) => {
		tab.addEventListener('click', () => {
			tabs.querySelectorAll('.tab').forEach((tab) =>
				tab.classList.remove('active'),
			);
			tabContents
				.querySelectorAll('.tab-content')
				.forEach((content) => content.classList.remove('active'));
			tab.classList.add('active');
			tabContents
				.querySelectorAll('.tab-content')
				[index].classList.add('active');
		});
	});
});

