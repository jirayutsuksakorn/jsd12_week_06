class animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    animalname() {
        console.log(`${this.name} is species ${this.species}`);
    }
}

class habitat extends animal {
    constructor(name, species, habitat) {
        super(name, species);
        this.habitat = habitat;
    }

    habitatAnimal() {
        console.log(`${this.name} is species ${this.species} and ${this.habitat}`)
    }

    changeName(newName) {
        const oldName = this.name;
        this.name = newName;
        return [this.name, oldName];
    }
}

const animal1 = new habitat('Blue whale', 'B.musculus', 'Ocean');

const [newVal, oldVal] = animal1.changeName('White whale');

console.log(animal.animalname);
console.log(`New name: ${newVal}, Old name: ${oldVal}`);