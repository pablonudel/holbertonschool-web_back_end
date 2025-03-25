export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  static checkString(str, attribute) {
    if (typeof str !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return str;
  }

  set name(newName) {
    this.setName(newName);
  }

  setName(newName) {
    this._name = Airport.checkString(newName, 'Name');
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    this.setCode(newCode);
  }

  setCode(newCode) {
    this._code = Airport.checkString(newCode, 'Code');
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
