import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  static checkNumber(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return num;
  }

  set floors(newFloors) {
    this._floors = SkyHighBuilding.checkNumber(newFloors);
  }

  get floors() {
    return this._floors;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
