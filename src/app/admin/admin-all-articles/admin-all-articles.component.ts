import { Component, ViewChild,OnInit} from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import { ApiServiceService} from '../../APIServices/api-service.service'
import { CookieService } from 'ngx-cookie-service'
import AOS from 'aos'
@Component({
  selector: 'app-admin-all-articles',
  templateUrl: './admin-all-articles.component.html',
  styleUrls: ['./admin-all-articles.component.scss']
})
export class AdminAllArticlesComponent implements OnInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  allArticle:any=null;
  sreenToDisplay:string=null;
  idArticleDetail:string=null;
  idArticleBeingView:string=null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private apiService:ApiServiceService,private cookieService:CookieService) { }

  ngOnInit(): void {
    AOS.init();
    this.apiService.getAllArtilce(1).subscribe(ok=>{
      this.allArticle=ok.Article;
      console.log(this.allArticle)
    })
  }
  viewDetailArticle(id){
    this.sreenToDisplay='Detail Article'
    this.cookieService.set( 'idDetailArticle', id ); // To Set Cookie
    this.assignCheckItem(id);
  }
  assignCheckItem(selected){
    this.idArticleBeingView=selected;
  }
  resetFormAllArticle(){
    this.sreenToDisplay=null
  }
  
}

