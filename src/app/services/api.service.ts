import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    try{
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
    }
    catch (error){
      return throwError(() => 'An error occurred while fetching the username.');
    }
  }

  getRepo(githubUsername: string, page: number, perPage: number){
    try{
    return this.httpClient.get(`https://api.github.com/search/repositories?q=user:${githubUsername} in:name sort:updated-asc&page=${page}&per_page=${perPage}`)
    }
    catch (error){
      return throwError(() => 'An error occurred while fetching repositories.');
    }
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
