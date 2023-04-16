function Person(name) {
  this.name = name;
  this.sayHi = function() {
    console.log('Hi, my name is ' + this.name);
  };
}

const person = new Person('Alice');


person.sayHi(); // 输出："Hi, my name is Alice"

// setTimeout(person.sayHi, 1000); // 输出："Hi, my name is undefined"
