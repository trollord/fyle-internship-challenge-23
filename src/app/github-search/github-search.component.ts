import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss']
})
export class GithubSearchComponent implements OnInit {

// To flow the data from child to parent i.e main App-component
@Output() onSearchUser: EventEmitter<any> = new EventEmitter();
public username: string = '';

constructor() { }

  public searchUser(){
    this.onSearchUser.emit(this.username);
    this.username = '';
    
  }

  ngOnInit(): void {
  }

}
