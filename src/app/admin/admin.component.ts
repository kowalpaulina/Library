import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
 
@Component({
  template:  `
    <h3>ADMIN</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./github" routerLinkActive="active">Github</a>
      <a routerLink="./users-manage" routerLinkActive="active">Zarządzaj Użytkownikami</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}