//ex.6.1

/*
class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let cat1 = new Cat("Skitty", 9);
let cat2 = new Cat("Pixel", 6);

console.log(cat1, cat2);

*/

//ex. 6.2
/*
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  sayHello() {
    console.log("Hello, " + this.firstname + " " + this.lastname + " !");
  }
}

let person1 = new Person("Jack", "Black");

person1.sayHello();

*/

//ex. 6.3

/*

class Animal {
  sayHello() {
    return `${this.constructor.greeting}! I'm ${this.name}!`;
  }
}

class Dog extends Animal {
  static greeting = "Woof";
  constructor(name, greeting) {
    super();
    this.name = name;
  }
}

class Cat extends Animal {
  static greeting = "Meow";
  constructor(name, greeting) {
    super();
    this.name = name;
  }
}

let cat = new Cat("Boulette");
console.log(cat.sayHello());

let dog = new Dog("Croquette");
console.log(dog.sayHello());

*/

//ex 6.4

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get name() {
    return `${this.firstname}  ${this.lastname}`;
  }

  set name(fullname) {
    const [firstname, lastname] = fullname.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let person = new Person("Ozlem", "Kandemir");
console.log(person.name);

console.log(person.firstname);
console.log(person.lastname);
