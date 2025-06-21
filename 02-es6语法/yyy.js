// 统一使用export导出暴露
const PI = 3.14;

function sum(a, b) {
  return a + b;
}

class Person {
  #n;
  age;
  get name() {
    return this.#n;
  }
  set name(n) {
    this.#n = n;
  }

  eat(food) {
    console.log(`output->food`, food);
  }

  static sum(a, b) {
    return a + b;
  }

  constructor(name, age) {
    this.#n = name;
    this.age = age;
  }
}

export { PI, sum, Person };
