import { BorrowedService } from './borrowed/borrowed.service';
import { ErrorService } from './errors/error.service';
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
import { LendComponent } from "./lend/lend.component";
import { PendingComponent } from "./pending/pending.component";
import { FooterComponent } from "./footer/footer.component";
import { BooksComponent } from "./books/books.component";
import { BooksListComponent } from "./books/books-list/books-list.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { BooksDetailComponent } from './books/books-detail/books-detail.component'
import { BooksSearchFormComponent } from './search-books/books-search-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBooksComponent } from './search-books/search-books.component';

import { AuthService } from "./login/auth.service";
import { StatusService } from "./login/user-status.service";
import { AuthGuard } from "./login/auth-guard.service";
import { AdminModule } from "./admin/admin.module";
import { SearchBooksListComponent } from './search-books/search-books-list/search-books-list.component';

import { BooksService } from './books/books.service';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration/registration.service';
import { LibraryComponent } from './library/library.component';
import { ErrorsComponent } from './errors/errors.component';
import { BorrowedComponent } from './borrowed/borrowed.component'

@NgModule({
  declarations: [
    AppComponent,
    LendComponent,
    PendingComponent,
    FooterComponent,
    BooksComponent,
    BooksListComponent,
    LoginComponent,
    BooksDetailComponent,
    NavbarComponent,
    SearchBooksComponent,
    BooksSearchFormComponent,
    SearchBooksListComponent,
    RegistrationComponent,
    LibraryComponent,
    ErrorsComponent,
    BorrowedComponent
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
        path: "",
        component: LibraryComponent
      },
      {
        path: "lend",
        component: LendComponent
      },
      {
        path: "borrowed-books",
        component: BorrowedComponent
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
        path: "pending",
        component: PendingComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "logout",
        redirectTo: '/',
      },

      {
        path: "admin",
        canActivate: [AuthGuard],
        component: AdminComponent
      },
      {
        path: "users",
        canActivate: [AuthGuard],
        children: [
          {path:'register', component: RegistrationComponent },

        ],
      },
      // {
      //   path: "",
      //   redirectTo: "/",
      //   pathMatch: "full"
      // }
      { 
        path: '**', 
        redirectTo: '/',
        pathMatch: 'full' 
      },
    ])
  ],
  providers: [AuthService, AuthGuard, BooksService,RegistrationService, ErrorService, StatusService, BorrowedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}


