import { Component, OnInit } from '@angular/core';
import { Post } from '../../data/post'; // Ton interface
import { PostService } from '../../services/post.service'; // Ton service

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrls: ['./post-list.css']
})
export class PostListComponent implements OnInit {
  // Liste des articles à afficher
  posts: Post[] = [];

  // Variables pour lier les champs du formulaire (Binding)
  newTitle: string = '';
  newContent: string = '';
  newCategoryId: string = '';

  // Injection du service
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // Chargement initial des données
    this.refreshPosts();
  }

  // Méthode pour récupérer les articles depuis le backend
  refreshPosts(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  // Méthode appelée lors du clic sur le bouton "Publier"
  onSubmit(): void {
    if (this.newTitle && this.newContent && this.newCategoryId) {
      // On appelle la méthode create du service
      this.postService.create(this.newTitle, this.newContent, this.newCategoryId)
        .subscribe(() => {
          this.refreshPosts(); // On recharge la liste après ajout
          this.resetForm();    // On vide les champs
        });
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  }

  // Réinitialisation du formulaire
  resetForm(): void {
    this.newTitle = '';
    this.newContent = '';
    this.newCategoryId = '';
  }
}