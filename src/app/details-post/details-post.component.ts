import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiServiceService} from '../APIServices/api-service.service'
import {ActivatedRoute} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss']
})
export class DetailsPostComponent implements OnInit {
  public Editor=ClassicEditor
  name = 'Angular 6';
  htmlContent = '';
  isShowForm=false;
  stateLike=false;
  side="over";
  article:any;
  /**Id of article that we want to see detail. */
  idArticle:any;
  mainTitle:String;
  ContentInParts:any;
  constructor(private apiService: ApiServiceService,
    private cookieService: CookieService) {

  }

  ngOnInit(): void {
    /**Get id which set inside cookie of browser */
    this.idArticle  = this.cookieService.get('idDetailArticle');
    /**Get article by id */
    this.apiService.getArticleById(this.idArticle).subscribe((res) => {
      
      this.article = res;
      console.log(JSON.stringify(res));
      this.article=this.article.Aricle
      this.mainTitle=this.article.tittle;
      this.ContentInParts = this.article.content;
    })
  }


  changeState(){
    
    if(this.isShowForm==false){
      this.isShowForm=true
    }else{
      this.isShowForm=false;
    }
  }
  changeStateLike(){
    if(this.stateLike){
      this.stateLike=false;
    }
    else
    this.stateLike=true;

  }

}
