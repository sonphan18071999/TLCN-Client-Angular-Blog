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
}
