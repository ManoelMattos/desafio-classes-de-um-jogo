class Character {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attack() {
      let attack;
      switch (this.type) {
        case "mage":
          attack = "magic";
          break;
        case "warrior":
          attack = "sword";
          break;
        case "monk":
          attack = "martial arts";
          break;
        case "ninja":
          attack = "shuriken";
          break;
        default:
          attack = "an unknown attack";
      }
  
      console.log(`The ${this.type} attacked using ${attack}`);
    }
  }
  
  // Example of using the class
  let mageCharacter = new Character("Merlin", 100, "mage");
  let warriorCharacter = new Character("Arthur", 30, "warrior");
  
  mageCharacter.attack();          // Output: The mage attacked using magic
  warriorCharacter.attack();       // Output: The warrior attacked using sword
  