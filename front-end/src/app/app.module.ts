import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { Router } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import * as $ from "jquery";

import { AppComponent } from "./app.component";
import { CompanyComponent } from "./company/company.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./reviews/services.component";
import { FooterComponent } from "./footer/footer.component";
import { ReviewsService } from "./reviews.service";
import { BooksComponent } from "./books/books.component";
import { BooksListComponent } from "./books/books-list.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { BooksDetailComponent } from './books/books-detail.component'
import { BooksSearchFormComponent } from './search-books/books-search-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBooksComponent } from './search-books/search-books.component';

import { AuthService } from "./login/auth.service";
import { AuthGuard } from "./login/auth-guard.service";
import { AdminModule } from "./admin/admin.module";
import { SearchBooksListComponent } from './search-books/search-books-list/search-books-list.component';

import {BooksService} from './books/books.service';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration/registration.service'

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    BooksComponent,
    BooksListComponent,
    LoginComponent,
    BooksDetailComponent,
    NavbarComponent,
    SearchBooksComponent,
    BooksSearchFormComponent,
    SearchBooksListComponent,
    RegistrationComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: "blog",
        component: CompanyComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "books",
        canActivate: [AuthGuard],
        component: BooksComponent,
        children: [
          {path:'new', component: BooksDetailComponent },
          {path:':id', component: BooksDetailComponent },
          {path:':id/edit', component: BooksDetailComponent },
        ],
      },
      {
        path: "searchBooks",
        component: SearchBooksComponent
      },
      {
        path: "reviews",
        component: ServicesComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "logout",
        redirectTo: '/blog',
      },

      {
        path: "admin",
        component: AdminComponent
      },
      {
        path: "users",
        children: [
          {path:'register', component: RegistrationComponent },

        ],
      },
      {
        path: "",
        redirectTo: "blog",
        pathMatch: "full"
      }
    ])
  ],
  providers: [ReviewsService, AuthService, AuthGuard, BooksService,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}


