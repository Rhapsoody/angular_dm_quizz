import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  categoryList: any[] = [];


  getCategoryList() {
    this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      this.categoryList = categories;
    });
  }
}
