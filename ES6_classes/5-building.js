export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  static checkNumber(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return num;
  }

  set sqft(newSqft) {
    this._sqft = Building.checkNumber(newSqft);
  }

  get sqft() {
    return this._sqft;
  }
}
