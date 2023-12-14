import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();
  Username: any;
  repo: any;

  constructor(private httpClient: HttpClient) { }

  getUser(githubUsername: string) {
    this.Username = githubUsername;
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);

  }

  getRepo() {
    return this.httpClient.get(`https://api.github.com/users/${this.Username}/repos`);
  }

  setUserData(data: any) {
    this.userDataSubject.next(data);
  }

  getReposLangues(githubUsername: string, reposName: string) {
    return this.httpClient.get(`https://api.github.com/repos/${githubUsername}/${reposName}/languages`);
  }

}
