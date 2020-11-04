import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexPostService {

  constructor(private httpClient: HttpClient) { }
  public postImageToServer(image) {
    return this.httpClient.post<any>("http://localhost:4000/api/post-image",image );
  }
  public getAllArticle(order){
    var obj = {
      "order":order
    }
    return this.httpClient.post<any>("http://localhost:4000/api/get-all-article",obj);
  }
  public getArticleById(id){
    return this.httpClient.get<any>("http://localhost:4000/api/get-all-article",id)
  }
}
