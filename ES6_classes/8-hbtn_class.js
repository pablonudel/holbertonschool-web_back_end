export default class HolbertonClass {
  constructor(size, location) {
    this._size = HolbertonClass.checkNumber(size);
    this._location = HolbertonClass.checkString(location);
  }

  static checkString(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Location must be a string');
    }
    return str;
  }

  static checkNumber(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return num;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
