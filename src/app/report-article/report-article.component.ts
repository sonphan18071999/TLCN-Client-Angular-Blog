import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../APIServices/api-service.service'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-report-article',
  templateUrl: './report-article.component.html',
  styleUrls: ['./report-article.component.scss'],
  providers:[CookieService]
})
export class ReportArticleComponent implements OnInit {

  CFTR:String =null
  SAA:String =null
  BTS:String =null
  BW:String =null
  DLOBM:String=null;
  reason:String=null;
  TextArea:String=null
  constructor(private apiServiceService:ApiServiceService,private cookieService: CookieService) { }

  ngOnInit(): void {
    
  }
  sendReport(){
    this.reason+=this.TextArea.toString();
    if(this.CFTR){
      this.reason+="Content conflict the rules;"
    }
    if(this.SAA){
      this.reason+="Spam/Advertise article;"
    }
    if(this.BTS){
      this.reason+="Break the subject;"
    }
    if(this.BW){
      this.reason+="Bad word;"
    }
    if(this.DLOBM){
      this.reason+="Deliberately lashing out blog members;"
    }
    alert("hello world")
    this.apiServiceService.reportArticle(this.cookieService.get("idArticle"),
    this.cookieService.get("userIdLogged"),this.reason
    ).subscribe(res=>{
      alert("Report thanh cong "+ res.Message)
    })
  }

}
