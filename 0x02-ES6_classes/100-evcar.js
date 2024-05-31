import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // Store range in underscore attribute
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species]; // Access Species directly from this.constructor
    // Pass necessary arguments to Species constructor
    return new Species(this._brand, this._motor, this._color);
  }
}

