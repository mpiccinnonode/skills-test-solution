import { Injectable, Signal, signal } from '@angular/core';
import { Person } from '../models/person.model';
import { people } from '../constants/people.const.';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private _people = signal<Person[]>([...people]);

  constructor() {}

  get people(): Signal<Person[]> {
    return this._people.asReadonly();
  }
}
