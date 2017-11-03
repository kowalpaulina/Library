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
  templateUrl: "./login.html"
})
export class LoginComponent {
  message: string;
  invitation: string;
  isLogged: boolean;
  users: Users[];
  private errorMessage: any = "";
  test: Subject<boolean> = new BehaviorSubject<boolean>(false);
  value: boolean;
  userData;

  constructor(
    private authService: AuthService,
    public router: Router,
    public fb: FormBuilder,
    private formBuilder: FormBuilder
  ) {
    this.authService.isLoggedIn.subscribe(value => {
      console.log("LoginComponent AuthService Value", value);
      console.log("LoginComponent AuthService  - TEST", this.authService.test);
      this.isLogged = value;
    });
  }

  setMessage():any {
    this.message =
      "Jesteś " +
      (this.authService.isLoggedIn ? "zalogowana/y" : "wylogowana/y");
  }

  loginSubmit(userData:Users) {
    this.message = "Loguję ...";
    const userRegister = this.users.filter(function(user) {
      return (
        user.email === userData.email && user.password === userData.password
      );
    });

    if (userRegister.length === 1) {
      this.authService.isLoggedIn.next(true);
      console.log("logowanie ok")
    } else {
      this.authService.isLoggedIn.next(false);
      this.message = "Nie ma takiego uzytkownika ...";
      console.log("logowanie nieudane ok")
    }

    if (this.authService.redirectUrl)
      this.router.navigate([this.authService.redirectUrl]);
    else this.router.navigate(["/"]);
    return this.loggedInUser(userData);
  }

//send Logged User Data to authService
loggedInUser(userData:Users){
  this.userData = userData;
  return this.returnUserData(this.userData);
}

returnUserData(userData:Users){
     this.authService.loggedInUser(this.userData);

     this.authService.getUserPermission().subscribe(value=>{
      this.value = value;
      console.log("value-getUserPermission",value)
      this.authService.isLoggedIn.next(this.value);
    });
}



   

  
 

  logout() {
    this.message = "Wylogowuję ...";
    this.authService.isLoggedIn.next(false);
    ///        console.log('LoginComponent AuthService  - TEST', this.authService.test);
  }

  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });

    this.authService.getUserStream().subscribe((users: Users[]) => {
      this.users = users;
    });

  }


}























//     let verified = users.find(user=> user.email === "kowal");
// if(verified && verified.password === "kowal"){
//   this.authService.isLoggedIn.next(true);

// }else{
//     this.authService.isLoggedIn.next(false);
// }

// export class User {
//   constructor(
//     public email:string,
//     public password:string
//   ) {}
// }

// this.
//   registerForm.
//   valueChanges.
//   subscribe(form => {
//         return form;
//   }
// );
