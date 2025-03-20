// 分别导出
export const PI = 3.14;

export function sum(a, b) {
  return a + b;
}

export class Person {
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
