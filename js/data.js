const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.

function colorGenerator() {
	let color = "#";
	const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F',];

	for (let i = 0; i < 6; i++) {
		const num = Math.floor(Math.random() * (hex.length));
		color += hex[num];
	}
	console.log(color);
	return color;
}

const colorVegetable = colorGenerator();
const colorUser = colorGenerator();
const colorAnimal = colorGenerator();

for (let i = 0; i < icons.length; i++) {
	if (icons[i].type === "user") {
		icons[i].color = colorUser;
	} else if (icons[i].type === "animal") {
		icons[i].color = colorAnimal;
	} else {
		icons[i].color = colorVegetable;

	}
}


function addIcons(icons) {
	for (let i = 0; i < icons.length; i++) {
		// <i class="fa-solid fa-dog"></i>
		const icon = document.createElement("i");
		icon.classList.add(`${icons[i].prefix}solid`, `${icons[i].prefix + icons[i].name}`);

		icon.style.color = icons[i].color;

		container.innerHTML += `
		<div class="box">
			<div>${icon.outerHTML}</div>
			<div>${icons[i].name}</div>
		</div>
		`;

	}
}

const container = document.querySelector(".container");
const select = document.querySelector("#menu");

select.addEventListener("change", function () {
	container.innerHTML = "";
	let filteredArray = [];
	switch (select.value) {

		case "animal":
			filteredArray = icons.filter(elem => elem.type === "animal");
			break;
		case "vegetable":
			filteredArray = icons.filter(elem => elem.type === "vegetable");
			break;
		case "user":
			filteredArray = icons.filter(elem => elem.type === "user");
			break;

	}


	addIcons(filteredArray.length > 0 ? filteredArray : icons);
});

addIcons(icons);

