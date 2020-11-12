import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  constructor(private httpClient: HttpClient) {
    
   }
  public submitArticle(article){
  return this.httpClient.post<any>(`http://localhost:4000/api/post-article`,article);
  }
}
