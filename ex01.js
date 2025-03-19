function afficherInfosPersonne(personne) {
	let chaîne =
		personne.nom +
		" a " +
		personne.age +
		"ans et habite à " +
		personne.ville +
		".";

	return chaîne;
}

console.log(afficherInfosPersonne({ nom: "Alice", age: 30, ville: "Paris" })); // 'Alice a 30 ans et habite à Paris.'
