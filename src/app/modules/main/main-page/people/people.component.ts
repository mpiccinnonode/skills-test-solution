import { Component, computed } from '@angular/core';
import { PeopleService } from '../../../../core/services/people.service';
import { Person } from '../../../../core/models/person.model';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [TableModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
})
export class PeopleComponent {
  people = computed<Person[]>(() => this.peopleService.people());

  constructor(private peopleService: PeopleService) {}
}
