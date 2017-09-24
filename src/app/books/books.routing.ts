
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component'
import { BooksDetailComponent } from './books-detail.component'





const routesConfig:Routes = [
  {path:'books', component: BooksComponent,
    children:[
       {path:'', component: BooksDetailComponent },
       {path:'new', component: BooksDetailComponent },
       {path:':id', component: BooksDetailComponent },
       {path:':id/edit', component: BooksDetailComponent },
    ] },
 
]

export const routerModule = RouterModule.forChild(routesConfig)