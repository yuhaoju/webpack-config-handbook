const msg = 'Using ES6 features.<br/>';

document.write(msg);

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    document.write(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    document.write(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
// 'Mitzie barks.'
d.speak();
