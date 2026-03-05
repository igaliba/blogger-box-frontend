import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment'; 
import { Post } from '../data/post'; 

@Injectable({
  providedIn: 'root',
})
export class PostService {
  
private postsUrl = 'http://localhost:8080/v1/posts'; 
 constructor(private http: HttpClient) {}

  
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
  create(title: string, content: string, categoryId: string): Observable<Post> {
  const body = { title, content, categoryId };
  return this.http.post<Post>(this.postsUrl, body); // [cite: 46]
  }
}