// class keyword, setters and getters
// super
// extend

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

// dry - don't repeat yourself principle
class Employee extends Person {
  constructor (name, job = 'Developer') {
    super(name);
    this.job = job;
  }
  printGreeting () {
    console.log(`Hi, I am ${this.name} and I am ${this.job}`);
  }
  callSuperMethod() {
    // call parents print greetings
    super.printGreeting();
  }
}

var person1 = new Employee('alexander');
person1.printGreeting();
person1.callSuperMethod();

var person2 = new Person();
person2.printGreeting();
person2.name = 'analog';
person2.printGreeting();
