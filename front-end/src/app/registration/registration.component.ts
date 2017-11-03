import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RegistrationService} from './registration.service'
import {Users} from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(private registrationService:RegistrationService) { }


  registerUser(user:Users){
    console.log(user);
    this.registrationService.registerUser(user);
  }

  

  ngOnInit() {
  }

}
