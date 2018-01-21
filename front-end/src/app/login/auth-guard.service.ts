import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  protected isLogged: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn.subscribe(value => {
      console.log("VALUE OF isLoggedIn", value);
      if (!value) this.router.navigate(["/login"]);
      this.isLogged = value;
      console.log("this.isLogged", this.isLogged);
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (localStorage.getItem("token") !== null) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
      console.log("isloggedin false");
    }

    if (this.isLogged) {
      console.log("true");
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    this.router.navigate(["/login"]);
    console.log("false");
    return false;
  }
}
