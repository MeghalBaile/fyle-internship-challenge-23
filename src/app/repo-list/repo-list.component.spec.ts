import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { RepoListComponent } from './repo-list.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RepositoryComponent } from '../repository/repository.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, NgxPaginationModule , FormsModule], 
      declarations: [RepoListComponent, RepositoryComponent]
    });
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
