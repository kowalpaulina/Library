import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'My library';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }


}


