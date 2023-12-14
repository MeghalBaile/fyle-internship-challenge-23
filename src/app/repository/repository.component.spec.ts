import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { RepositoryComponent } from './repository.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';
import { ApiServiceStub } from '../services/stub';

describe('RepositoryComponent', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;
  // let apiService: jasmine.SpyObj<ApiService>;
  // let apiServiceStub : Partial<ApiService>;
  let apiService:ApiService;
  beforeEach(() => {
    // const spy = jasmine.createSpyObj('ApiService', ['getRepo']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NgxPaginationModule, FormsModule], 
      providers: [{ provide: ApiService, useClass: ApiServiceStub }],
      declarations: [RepositoryComponent]
    });
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// Test to check repo fetching
  it('should fetch repositories on initialization', () => {
    fixture.detectChanges();
    expect(component.publicRepos).toEqual([
      { name: 'Repo1', language: 'TypeScript' },
      { name: 'Repo2', language: 'JavaScript' },
    ]);
  });

});
