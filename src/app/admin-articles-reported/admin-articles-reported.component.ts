import {AfterViewInit, Component, ViewChild,OnInit,Output,EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AdminDialogOptionComponent} from '../admin-dialog-option/admin-dialog-option.component'
import {ApiServiceService} from '../APIServices/api-service.service'
import { setEmitFlags } from 'typescript';
import {CookieService} from 'ngx-cookie-service';
import { DialogBanArticleComponent} from '../dialog-ban-article/dialog-ban-article.component'
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

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
  selectedLevel:string=null;
  constructor(public dialog: MatDialog,private apiService :ApiServiceService,
    private _cookieService: CookieService,private toast :ToastrService) {
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
  returnToMainScreen(){
    this.sreenToDisplay=null;
  }
  openDialog(idItem){
    //1. Bên Dialog sẽ mở lên và chọn level.
    //2. Sau khi chọn level xog nó sẽ cho ra dữ liệu ngay event dialog close.
    //3. Sau khi event close pass data về component chính. Thằng subcribe sẽ hứng dữ liệu đó.
    var DialogRef = this.dialog.open(DialogBanArticleComponent);
    DialogRef.afterClosed()
    .subscribe(result=>{
      if (result) {
        this.allArticleBeingReport = null;
        this.selectedLevel = result   // Gán data thành công cho thằng selectedLevel nè 
        if (result) {
          console.log("No vo day ne")
          if (result == "Forever") {
            result = -1;
            this.updateLevelBanArticle(idItem,result);
          } else {
            this.updateLevelBanArticle(idItem,result);
          }
        }
      } else {

      }
      }
    )
  }
  updateLevelBanArticle(IdItem,level){
    return this.apiService.updateLevelBanOfArticle(IdItem,level).subscribe(ok=>{
      this.allArticleBeingReport=ok.Article;
      this.toast.success('Login successfully', 'Login');
    })
  }
  
}
export interface PeriodicElement {
  idArticle: string;
  endBanDate: Date;
  isDisabled: boolean;
  levelBan: number;
}

