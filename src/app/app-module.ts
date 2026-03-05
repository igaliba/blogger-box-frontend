import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { PostListComponent } from './components/post-list/post-list';
import { TopBarComponent } from './components/top-bar/top-bar';
import { PostListItemComponent } from './components/post-list-item/post-list-item';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule, 
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }