import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  navItems: MenuItem[] = [
    {
      icon: PrimeIcons.CAR,
      label: 'Cars',
      routerLink: 'cars',
    },
    {
      icon: PrimeIcons.USERS,
      label: 'People',
      routerLink: 'people',
    },
  ];
}
