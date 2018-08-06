class Animal{
  move(distance:number = 0) {
    console.log(`animal move ${distance}m`)
  }
}

class Dog extends Animal {
  bark() {
    console.log('wang!')
  }
}

let dog = new Dog();
dog.move(10);
dog.bark();