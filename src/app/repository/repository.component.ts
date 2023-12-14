import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Repos } from '../models/publicRepos';
@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent {
  myObject: any = {};

  publicRepos:any;
  itemsPerPage = 10;
  p:any;
  language: any;
  repositoryLanguages: any[] = [];
  githubUsername: string = this.api.Username;
  publicRepo: Repos[] = [];
  limitRecord: number = 10;
  skipRecord: number = 0;
  tempPublicRepos: any;
  repos: Repos = new Repos();



  constructor(private api: ApiService) {
    this.api.getRepo().subscribe(
      (user) => {
        // this.publicRepo[0] = user;
        this.publicRepos = user
        this.myObject = user;
        console.log(this.publicRepos)


      },
      (error) => {
        console.log("User not found");
      }
    );
  }

}


