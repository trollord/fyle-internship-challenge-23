import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { GitHubUser } from './interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(username: string): Observable<GitHubUser> {      
      return this.httpClient.get<GitHubUser>(`https://api.github.com/users/${username}`);     
  }

  getRepo(username: string, page: number, perPage: number){         
    return this.httpClient.get(`https://api.github.com/search/repositories?q=user:${username} in:name sort:updated-asc&page=${page}&per_page=${perPage}`)
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
