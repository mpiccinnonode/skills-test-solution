import { Injectable, Signal, signal } from '@angular/core';
import { Car } from '../models/car.model';
import { cars } from '../constants/cars.consts';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private _cars = signal<Car[]>([...cars]);
  private _carsBackup = signal<Car[]>([...cars]);

  constructor() {}

  get cars(): Signal<Car[]> {
    return this._cars.asReadonly();
  }

  filterCars(keyword: string): void {
    this._cars.update(() => {
      if (keyword) {
        return [
          ...this._carsBackup().filter((item) =>
            item.model.toLowerCase().startsWith(keyword.toLowerCase()),
          ),
        ];
      } else {
        return [...this._carsBackup()];
      }
    });
  }
}
