import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubProfileComponent } from './github-profilee/github-profilee.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    GithubProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
