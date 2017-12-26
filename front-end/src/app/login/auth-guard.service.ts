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
    });
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url:string): boolean {
    if (this.isLogged) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    this.router.navigate(["/login"]);
    return false;
  }
}
