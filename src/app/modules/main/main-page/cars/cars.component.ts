import { Component, computed } from '@angular/core';
import { CarsService } from '../../../../core/services/cars.service';
import { Car } from '../../../../core/models/car.model';
import { TableModule } from 'primeng/table';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [TableModule, SearchbarComponent, FormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  cars = computed<Car[]>(() => this.carsService.cars());

  keyword: string = '';

  constructor(private carsService: CarsService) {}

  filterCars(): void {
    this.carsService.filterCars(this.keyword);
  }
}
