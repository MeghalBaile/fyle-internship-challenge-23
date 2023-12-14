import { BehaviorSubject, Observable, of } from 'rxjs';

export class ApiServiceStub {
    private userDataSubject = new BehaviorSubject<any>(null);

    userData$ = this.userDataSubject.asObservable();
    Username: any;
    repo: any;
  
    getUser(githubUsername: string) {
      this.Username = githubUsername;
      // Return an observable with mock user data
      return of({ login: 'mockUser', name: 'Mock User' });
    }
  
    getRepo() {
      // Return an observable with mock repository data
      return of([
        { name: 'Repo1', language: 'TypeScript' },
        { name: 'Repo2', language: 'JavaScript' },
      ]);
    }
  
    setUserData(data: any) {
      this.userDataSubject.next(data);
    }
  
    getReposLangues(githubUsername: string, reposName: string) {
      // Return an observable with mock language data
      return of({ TypeScript: 5000, JavaScript: 3000 });
    }
}
