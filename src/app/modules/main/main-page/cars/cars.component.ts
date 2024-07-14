import { Component, computed } from '@angular/core';
import { CarsService } from '../../../../core/services/cars.service';
import { Car } from '../../../../core/models/car.model';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [TableModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  cars = computed<Car[]>(() => this.carsService.cars());

  constructor(private carsService: CarsService) {}
}
