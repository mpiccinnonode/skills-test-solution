import { Injectable, Signal, signal } from '@angular/core';
import { Car } from '../models/car.model';
import { cars } from '../constants/cars.consts';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private _cars = signal<Car[]>([...cars]);

  constructor() {}

  get cars(): Signal<Car[]> {
    return this._cars.asReadonly();
  }
}
