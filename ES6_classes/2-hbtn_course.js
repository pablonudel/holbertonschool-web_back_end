export default class HolbertonCourse {
  constructor(name, length, students) {
    this.setName(name);
    this.setLength(length);
    this.setStudents(students);
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
    this.setName(newName);
  }

  get name() {
    return this._name;
  }

  setName(newName) {
    this._name = HolbertonCourse.checkString(newName);
  }

  set length(newLength) {
    this.setLength(newLength);
  }

  get length() {
    return this._length;
  }

  setLength(newLength) {
    this._length = HolbertonCourse.checkNumber(newLength);
  }

  set students(newStudents) {
    this.setStudents(newStudents);
  }

  get students() {
    return this._students;
  }

  setStudents(newStudents) {
    this._students = HolbertonCourse.checkStringArray(newStudents);
  }
}
