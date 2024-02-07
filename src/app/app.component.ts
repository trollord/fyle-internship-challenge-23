import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  username: string = "";
  data : any

  SearchHandler(username: string){
    this.username = username;
  }

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.apiService.getUser(this.username).subscribe(console.log);
  }
}
