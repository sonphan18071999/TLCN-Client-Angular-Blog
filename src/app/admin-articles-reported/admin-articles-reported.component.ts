import {AfterViewInit, Component, ViewChild,OnInit,Output,EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AdminDialogOptionComponent} from '../admin-dialog-option/admin-dialog-option.component'
import {ApiServiceService} from '../APIServices/api-service.service'
import { setEmitFlags } from 'typescript';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-articles-reported',
  templateUrl: './admin-articles-reported.component.html',
  styleUrls: ['./admin-articles-reported.component.scss']
})
export class AdminArticlesReportedComponent implements OnInit {

  activeButtonOption:boolean = true;
  orderBeingActive : number=0;
  panelOpenState = false;
  idArticleBeingReport:any=null;
  public allArticleBeingReport : any;
  tableToDisplay:string=null;     //Bảng chứa các article bị report
  sreenToDisplay:string=null;
  @Output() setStateIndexPost = new EventEmitter<string>();
  idViewDetail:string=null;
  constructor(public dialog: MatDialog,private apiService :ApiServiceService,
    private _cookieService: CookieService) {
    this.getAllArticleBeingReport() // Lấy tất cả những bài viết đang bị report đủ thể loại
  }

  ngOnInit(): void {
    this.tableToDisplay='All Article Being Report';
  }
  getAllArticleBeingReport(){
    return this.apiService.getAllBeingReportedArticle().subscribe((data: any)=>{
      this.allArticleBeingReport=data.Article

    });
  }
  switchActiveOptionButton(order){
    //Load dialog
    this.dialog.open(AdminDialogOptionComponent);
    //Switch icon
    if(this.activeButtonOption){
      this.activeButtonOption=false;
    }else{
      this.activeButtonOption=true;
    }
    this.orderBeingActive = order;
  }
  assignCheckItem(selected){
    this.idArticleBeingReport=selected;
  }
  switchModeDisplayArticle(name){
    this.tableToDisplay=name;
  }
  changeToDetailArticle(id){
    this.idArticleBeingReport=id;
    this.sreenToDisplay='Detail Article';
    this._cookieService.set( 'idDetailArticle', id ); // To Set Cookie
    this.assignCheckItem(id);
  }

  funcSetStateIndexPost(value: string) {
    this.setStateIndexPost.emit(value);
  }
}
export interface PeriodicElement {
  idArticle: string;
  endBanDate: Date;
  isDisabled: boolean;
  levelBan: number;
}

