import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth-guard.service';
import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Review } from './review';
import { ReviewsService } from './reviews.service';




@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Moja biblioteka';
  invitation: string;


  reviews: Review[];


  constructor(private reviewsService: ReviewsService, private authService:AuthService) { }

//  getReviews(): void {
//     this.reviewsService.getReviews().then(reviews => this.reviews = reviews);
//   }

  ngOnInit(): void {
    // this.getReviews();
  }


}


