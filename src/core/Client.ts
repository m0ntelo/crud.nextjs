export default class Customer {
  #id: string;
  #name: string;
  #idade: number;

  constructor(name: string, idade: number, id: string = '') {
    this.#name = name;
    this.#idade = idade;
    this.#id = id;
  }

  static vazio() {
    return new Customer('', 0)
  }

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  get idade() {
    return this.#idade
  }
}