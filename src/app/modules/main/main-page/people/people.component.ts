import { Component, computed } from '@angular/core';
import { PeopleService } from '../../../../core/services/people.service';
import { Person } from '../../../../core/models/person.model';
import { TableModule } from 'primeng/table';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [TableModule, SearchbarComponent, FormsModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
})
export class PeopleComponent {
  people = computed<Person[]>(() => this.peopleService.people());

  keyword: string = '';

  constructor(private peopleService: PeopleService) {}

  filterPeople(): void {
    this.peopleService.filterPeople(this.keyword);
  }
}
