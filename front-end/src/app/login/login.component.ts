import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs/Observable";
import { Users } from "../registration/user";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

@Component({
  templateUrl: "./login.html",
  styleUrls: ["./login.component.scss"],
})

export class LoginComponent {
  message: string;
  isLogged: boolean;
  users: Users[];
  private errorMessage: any = "";
  value: boolean;
  userData: Users;
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    public router: Router,
    public fb: FormBuilder,
    private formBuilder: FormBuilder
  ) {

    this.authService.isLoggedIn.subscribe(value => {
      this.isLogged = value;
    });
  }

  loginSubmit({ value, valid }: { value: Users, valid: boolean }) {
    console.log(this.loginForm.value, this.loginForm.valid);
    this.authService.signin(value)
      .subscribe(
        data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.isLoggedIn();
        },
        error => console.error(error)
      );
    
    this.loginForm.reset();
    
    }

  isLoggedIn() {
        if(localStorage.getItem('token') !== null){
            this.authService.isLoggedIn.next(true);
        }else{
            this.authService.isLoggedIn.next(false);
        }

        if (this.authService.redirectUrl)
          this.router.navigate([this.authService.redirectUrl]);
        else this.router.navigate(["/"]);
  }

  logout() {
    this.authService.logout();
    this.authService.isLoggedIn.next(false);
  }

  

  ngOnInit() {
    
    this.loginForm = new FormGroup({
      email: new FormControl("", [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
          ),
      password: new FormControl("", Validators.required)
    });
  
  }
}