import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {
  userData: any;
  constructor(private api:ApiService, private route:Router) {
    this.api.userData$.subscribe((data) => {
      this.userData = data;
    });
  }

  goToSearch(){
    this.route.navigate(['']);
  }
}
