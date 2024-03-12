export default class Customer {
  #id: string;
  #name: string;
  #idade: string;

  constructor(name: string, idade: string, id: string = '') {
    this.#name = name;
    this.#idade = idade;
    this.#id = id;
  }

  static vazio() {
    return new Customer('', '')
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