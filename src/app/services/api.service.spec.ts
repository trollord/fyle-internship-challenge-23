import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { mockResponse } from './testconstants';
import { data } from 'jquery';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Api Servicce', () => {   

    it('should get user data', () => {
      const username = 'testUser';
      
      service.getUser(username).subscribe(user => {
        expect(user.login).toEqual(username);
      });
  
      const req = httpMock.expectOne(`https://api.github.com/users/${username}`);
      expect(req.request.method).toBe('GET');
  
      req.flush({
        login: username
      });
    });

    it('should get repos', () => {

      const username = 'trollord';
      const page = 1;
      const perPage = 5;    

      service.getRepo(username,page,perPage).subscribe();          
      const req = httpMock.expectOne(`https://api.github.com/search/repositories?q=user:${username}+in:name+sort:updated-asc&page=${page}&per_page=${perPage}`);      
      expect(req.request.method).toBe('GET'); 
    });

  });
});
