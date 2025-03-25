import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static checkNumber(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return num;
  }

  static checkClass(instance, className) {
    if (!(instance instanceof className)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    return instance;
  }

  set amount(newAmount) {
    this._amount = Pricing.checkNumber(newAmount);
  }

  get amount() {
    return this._amount;
  }

  set currency(newCurrency) {
    this._currency = Pricing.checkClass(newCurrency, Currency);
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    this.checkNumber(amount);
    this.checkNumber(conversionRate);
    return amount * conversionRate;
  }
}
