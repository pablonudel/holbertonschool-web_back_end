export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  static checkString(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return str;
  }

  static checkNumber(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return num;
  }

  static checkStringArray(arr) {
    if (Array.isArray(arr) === false || arr.every((str) => typeof str !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return arr;
  }

  set name(newName) {
    this._name = HolbertonCourse.checkString(newName);
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    this._length = HolbertonCourse.checkNumber(newLength);
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    this._students = HolbertonCourse.checkStringArray(newStudents);
  }

  get students() {
    return this._students;
  }
}
