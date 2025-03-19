function listerPersonnes(personnes) {
	let str = "";

	for (let i = 0; i < personnes.length; i++) {
		str += personnes[i].nom + " : " + personnes[i].age + " ans";
		if (personnes.length - 1 == i) {
			str += ".";
		} else {
			str += ", ";
		}
	}

	return str;
}

const personnes = [
	{ nom: "Alice", age: 30 },
	{ nom: "Bob", age: 25 },
	{ nom: "Charlie", age: 35 },
];

console.log(listerPersonnes(personnes)); // 'Alice : 30 ans, Bob : 25 ans, Charlie : 35 ans.'
