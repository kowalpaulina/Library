import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
 
@Component({
  styleUrls: ["./admin.component.scss"],
  template:  `
    <h3>Administrative panel</h3>
    <nav>
      <li>
        <a routerLink="./logout" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Logout
        </a>
      </li>
      <li>
        <a routerLink="./users-manage" routerLinkActive="active">Manage users</a>
      </li>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}