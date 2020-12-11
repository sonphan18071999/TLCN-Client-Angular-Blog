import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AdminDialogOptionComponent} from '../admin-dialog-option/admin-dialog-option.component'
import {ApiServiceService} from '../APIServices/api-service.service'
import { setEmitFlags } from 'typescript';

@Component({
  selector: 'app-admin-articles-reported',
  templateUrl: './admin-articles-reported.component.html',
  styleUrls: ['./admin-articles-reported.component.scss']
})
export class AdminArticlesReportedComponent implements OnInit {

  activeButtonOption:boolean = true;
  orderBeingActive : number=0;
  panelOpenState = false;
  selectedArticleBeingReport:any=null;
  public allArticleBeingReport : any;
  constructor(public dialog: MatDialog,private apiService :ApiServiceService) {
    this.getAllArticleBeingReport() // Lấy tất cả những bài viết đang bị report đủ thể loại
  }

  ngOnInit(): void {
    
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
    this.selectedArticleBeingReport=selected;
    console.log("item dang duoc selected la "+selected)
  }
}
export interface PeriodicElement {
  idArticle: string;
  endBanDate: Date;
  isDisabled: boolean;
  levelBan: number;
}

