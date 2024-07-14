import { Injectable, Signal, signal } from '@angular/core';
import { Person } from '../models/person.model';
import { people } from '../constants/people.const.';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private _people = signal<Person[]>([...people]);
  private _peopleBackup = [...people];

  constructor() {}

  get people(): Signal<Person[]> {
    return this._people.asReadonly();
  }

  filterPeople(keyword: string): void {
    this._people.update(() => {
      if (keyword) {
        return [
          ...this._peopleBackup.filter((item) =>
            item.firstName.toLowerCase().startsWith(keyword.toLowerCase()),
          ),
        ];
      } else {
        return [...this._peopleBackup];
      }
    });
  }
}
