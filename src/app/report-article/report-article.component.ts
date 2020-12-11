import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../APIServices/api-service.service'
import { CookieService } from 'ngx-cookie-service';
import {ToastrService} from 'ngx-toastr'
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
  constructor(private apiServiceService:ApiServiceService,
    private cookieService: CookieService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }
  sendReport(){
    if(this.TextArea!=null)
    {
      this.reason+=this.TextArea.toString()+ '<br>';
    }
    if(this.CFTR !=null){
      this.reason+="Content conflict the rules <br>"
    }
    if(this.SAA !=null){
      this.reason+="Spam/Advertise article <br>"
    }
    if(this.BTS !=null){
      this.reason+="Break the subject<br>"
    }
    if(this.BW !=null){
      this.reason+="Bad word<br>"
    }
    if(this.DLOBM!=null){
      this.reason+="Deliberately lashing out blog members<br>"
    }
    this.apiServiceService.reportArticle(
    this.cookieService.get("idDetailArticle"),
    this.cookieService.get("userIdLogged"),this.reason
    ).subscribe(res=>{
      if(res.Message =="Report Limited"){
        this.toastr.error("Report has reach limited","Report")
      }else{
        this.toastr.success("Report article successfully","Report")
      }
    })
  }

}
