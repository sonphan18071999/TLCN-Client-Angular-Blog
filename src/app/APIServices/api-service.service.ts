import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { strict } from 'assert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url="https://be-nodejs-tlcn.herokuapp.com/api/";
  
  // private url="http://localhost:4000/api/";

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
  //4. Get all article posted by user
  public getAllArticlePostedByUser(idUser){
    return this.httpClient.get<any>(this.url+"get-all-article-posted-by-user",{"observe":"body","responseType":"json","params":{id:idUser}});
  }
  //5. Get saved article by specific user
  public getAllSavedArticleByUser(idUser){
    return this.httpClient.post<any>(this.url+"get-saved-article-by-user",{idUser:idUser});
  }

  //6. Check author of article to show button edit
  public checkAuthorOfArticle(idArticle,idUser){
    return this.httpClient.post<any>(this.url+"check-author",
    {
    "idArticle":idArticle,
    "idUser":idUser
    })
  }

  // 7. Update article content
  public updateContentOfArticle(idArticle,content){
    return this.httpClient.post<any>(this.url+'update-article-content',{
      "idArticle":idArticle,
      "content":content
    })
  }

  //8. Get all article
  public getAllArtilce(order){
    return this.httpClient.post<any>(this.url+'get-all-article',{"order":order});
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
  public createAccount(fname,lname,email,phone,pwd,add){
    return this.httpClient.post<any>(this.url+'add-new-user-account',{
      "email":email,
      "password":pwd,
      "phone":phone,
      "name":fname+' '+lname,
      "typeAccount":"normal"
    })
  }
    /**User account session */


    /**Report Article */
  public reportArticle(idArticle,idUser,reason){
    return this.httpClient.post<any>(this.url+'create-report',{
      idArticle:idArticle,
      "userReport":[{
        "idUser":idUser,
        "Reason":reason
      }]
    })
  }
  public updateLevelBanOfArticle(idArticle,level){
    return this.httpClient.post<any>(this.url+'update-level-artilce-report',{
      "idArticle":idArticle,
      "level":level
    });
  }
    /**Report Article */

  public getAllBeingReportedArticle() {
    return this.httpClient.get<any>(this.url+'all-article-being-report');
  }
    /**Report Article */

    /**Annoucement */
  public createAnnouncement(idUser,description,typeComment,idArticle){
    return this.httpClient.post<any>(this.url + "create-annoucement",{
      "annoucement":{
        "idUser": idUser,
       "description":description,
       "typeComment": typeComment,
       "idArticle": idArticle
       }
    })
  }
    /**Annoucement */
}
