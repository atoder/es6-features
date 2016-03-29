// class keyword, setters and getters
class Person {
  constructor (name) {
    this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
  }
  set name (val) {
    this._name = Person.capitalizeWord(val) + ' test!';
  
  }
  get name (){
    return this._name;

  }
  printGreeting () {
    console.log(`Hi, I am ${this.name}!`);
  }
  static capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
}

var person1 = new Person('alexander');
person1.printGreeting();

var person2 = new Person();
person2.printGreeting();
person2.name = 'analog';
person2.printGreeting();
