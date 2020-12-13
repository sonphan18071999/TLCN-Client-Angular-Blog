import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  constructor(private httpClient: HttpClient) {
    
   }
  public submitArticle(article){
    return this.httpClient.post<any>(`https://be-nodejs-tlcn.herokuapp.com/api/post-article`,article);
  }
}
