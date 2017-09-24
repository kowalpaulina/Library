import { Component } from '@angular/core';
import {Github} from './github';
import {GithubService} from './github.service';

@Component({
  template:  `
    <div>
            <ul class="items github-items">
                <li>
                    <span>{{current_user_url}}</span>
                </li>
            </ul>
        </div>
  `,
  styles: [`
    .github-items {
      height: 800px;
      margin-top: 50px;
    }
    li{
        list-style:none;
        padding:10px;
        margin-top:10px;
        background-color: rgba(15,82,139,0.2);
        cursor:pointer;}
    a{
        color: #000;
    }
        
        
        `],
  providers: <any>[GithubService]
})
export class GithubComponent { 
   constructor(private _githubService:GithubService) {}
   

    ngOnInit(): void {
        this.getRepos();
        
  }
  
    //private repos:Github[] = [];
    private repos:Github = {};
    private errorMessage:any = '';

    getRepos() {
        this._githubService.getData()
            .subscribe(
                repos => this.repos = repos,
                error => this.errorMessage = <any>error);
    }






}


