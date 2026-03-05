import { Category } from "./category";

export interface Post {
    id: string;
    title: string;
    content: string;
    author: string; // Doit être présent
    createdDate: Date;
    category: Category;
}