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
  /**Artcile Session */
  // 1. Get article by id
  public getArticleById(id){
    return this.httpClient.get<any>(this.url+"get-article",{"observe":"body","responseType":"json","params":{id:id}});
  }
  // 2. Save article for specific user.
  public saveArticle(idUser,idArticle){
    var obj = {
      "idUser":idUser,
      "allArticleSaved":{
        "idArticle":idArticle
      }
    }
    return this.httpClient.post<JSON>(this.url+"save-article",obj,{observe: "response"});
  }

  // 3. Check save article for specific user.
  public checkArticle(idUser,idArticle){
    var obj = {
      "idUser":idUser,
      "allArticleSaved":{
        "idArticle":idArticle
      }
    }
    return this.httpClient.post<JSON>(this.url+"check-save-status-article",obj,{observe: "response"});
  }
  /**Artcile Session */



  /**Comment session*/
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
  /**Comment session*/


    /**User account session */
  public getInforUser(idUser){
    return this.httpClient.post<any>(this.url+'get-user-information',{"idUser":idUser});
  }     
    /**User account session */



}
