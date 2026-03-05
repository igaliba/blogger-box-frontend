import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing-module'; // Indispensable

import { AppComponent } from './app';
import { TopBarComponent } from './components/top-bar/top-bar';
import { PostListComponent } from './components/post-list/post-list';
import { PostListItemComponent } from './components/post-list-item/post-list-item';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,      // Doit être ici
    PostListComponent,    // Doit être ici
    PostListItemComponent // Doit être ici
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule, 
    CommonModule,
    AppRoutingModule // Assure-toi que ce fichier existe et est importé
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }