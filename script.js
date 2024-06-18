document.addEventListener('DOMContentLoaded', async () => {
	const superheroesList = document.querySelector('.superheroes-list');
	const fetchHeroes = async () => {
		const response = await fetch('superheroes.json');
		const data = await response.json();
		console.log(data);
		return data;
	};
	const heroes = await fetchHeroes();
	heroes.forEach(hero => {
		const heroCard = document.createElement('div');
		heroCard.classList.add('superhero-card');
		heroCard.innerHTML = `
		<img src="images/${hero.image}" alt="${hero.name}">
		<h3>${hero.name}</h3>
		<p><a href="#" class="detail-link" data-id="${hero.id}">View Details</a></p>
	`;
		superheroesList.appendChild(heroCard);
	});

	document.querySelectorAll('.detail-link').forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault();
			const heroId = event.target.getAttribute('data-id');
			const hero = data.find(h => h.id == heroId);
			alert(`Details for ${hero.name}: ${hero.details}`);
		});
	});
});
