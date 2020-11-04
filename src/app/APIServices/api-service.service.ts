import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url="http://localhost:4000/api/";
  constructor(private httpClient: HttpClient) { 

  }
  /**Artcile */
  public getArticleById(id){
    return this.httpClient.get<any>(this.url+"get-article",{"observe":"body","responseType":"json","params":{id:id}});
  }

  /**Comment section*/
  //1. Post comment
  public postCommentParent(comment){
    return this.httpClient.post<any>(this.url+"post-comment-parent",comment)
  }
  //2. Get all comment of one article
  public getAllComment(idArticle){
    return this.httpClient.post<any>(this.url+"get-comment-article",{"idArticle":idArticle})
  }
  //3. Post comment child into exist parent comment.
  public postCommentChild(comment){
    return this.httpClient.post<any>(this.url+"post-comment-child",comment)
  }
  /**Comment section*/
}
