import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Post } from '../data/post'; 
import { Category } from '../data/category';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsUrl = 'http://localhost:8080/v1/posts'; 
  private categoriesUrl = 'http://localhost:8080/v1/categories';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  create(title: string, content: string, categoryId: string, author: string): Observable<Post> {
    const body = { 
      title: title, 
      content: content, 
      categoryId: categoryId, 
      author: author 
    };
    return this.http.post<Post>(this.postsUrl, body);
  }
}