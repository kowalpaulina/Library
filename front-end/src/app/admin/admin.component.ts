import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
 
@Component({
  template:  `
    <h3>Administrative panel</h3>
    <nav>
      <a routerLink="./logout" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Logout</a>
      <a routerLink="./users-manage" routerLinkActive="active">Manage users</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}