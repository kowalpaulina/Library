import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminComponent } from "./admin.component";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { GithubComponent } from "./github.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";

import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    GithubComponent,
    ManageUsersComponent
  ]
})
export class AdminModule {}
