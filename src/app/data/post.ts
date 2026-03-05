import { Category } from "./category";

export interface Post {
    id: string;
    title: string;
    content: string;
    author: string; 
    createdDate: Date;
    category: Category;
}