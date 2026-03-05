import { Component, OnInit } from '@angular/core';
import { Post } from '../../data/post'; 
import { PostService } from '../../services/post.service'; 
import { Category, CATEGORIES } from '../../data/category'; 

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  categories: Category[] = CATEGORIES; 

  newTitle: string = '';
  newContent: string = '';
  newAuthor: string = '';
  newCategoryId: string = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.refreshPosts();
    this.loadCategories();
  }

  refreshPosts(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  loadCategories(): void {
    this.postService.getCategories().subscribe({
      next: (data) => {
        console.log("Catégories reçues du backend :", data);
        if (data && data.length > 0) {
          this.categories = data; 
        }
      },
      error: (err) => {
        console.error("Erreur lors du chargement des catégories :", err);
      }
    });
  }

  onSubmit(): void {
    if (this.newTitle && this.newContent && this.newCategoryId && this.newAuthor) {
      this.postService.create(this.newTitle, this.newContent, this.newCategoryId, this.newAuthor)
        .subscribe({
          next: () => {
            this.refreshPosts();
            this.resetForm();
            alert("🚀 Article publié !");
          },
          error: (err) => {
            console.error("Erreur 400 détaillée :", err);
            alert("Erreur : " + (err.error?.message || "Vérifiez la console"));
          }
        });
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  }

  resetForm(): void {
    this.newTitle = '';
    this.newContent = '';
    this.newAuthor = '';
    this.newCategoryId = '';
  }
}