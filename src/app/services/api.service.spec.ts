import { TestBed , inject} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should fetch user data', () => {
    const mockUserData = { login: 'testuser' };

    apiService.getUser('testuser').subscribe(user => {
      expect(user).toEqual(mockUserData);
    });

    const req = httpTestingController.expectOne('https://api.github.com/users/testuser');
    expect(req.request.method).toEqual('GET');
    req.flush(mockUserData);
  });

  it('should fetch repository data', () => {
    const mockRepoData = [{ name: 'repo1' }, { name: 'repo2' }];

    apiService.getRepo().subscribe(repos => {
      expect(repos).toEqual(mockRepoData);
    });

    const req = httpTestingController.expectOne('https://api.github.com/users/undefined/repos');
    expect(req.request.method).toEqual('GET');
    req.flush(mockRepoData);
  });

  it('should set user data', () => {
    const mockUserData = { login: 'testuser' };

    apiService.setUserData(mockUserData);

    apiService.userData$.subscribe(user => {
      expect(user).toEqual(mockUserData);
    });
  });

  it('should fetch repository languages data', () => {
    const mockLanguagesData = { language1: 100, language2: 200 };

    apiService.getReposLangues('testuser', 'repo1').subscribe(languages => {
      expect(languages).toEqual(mockLanguagesData);
    });

    const req = httpTestingController.expectOne('https://api.github.com/repos/testuser/repo1/languages');
    expect(req.request.method).toEqual('GET');
    req.flush(mockLanguagesData);
  });


});
