export default class Currency {
  constructor(code, name) {
    this.setCode(code);
    this.setName(name);
  }

  static checkString(str, propertyName) {
    if (typeof str !== 'string') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return str;
  }

  set code(newCode) {
    this.setCode(newCode);
  }

  setCode(newCode) {
    this._code = Currency.checkString(newCode, 'Code');
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    this.checkString(newName);
  }

  setName(newName) {
    this._name = Currency.checkString(newName, 'Name');
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
