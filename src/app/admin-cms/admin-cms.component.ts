import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-cms',
  templateUrl: './admin-cms.component.html',
  styleUrls: ['./admin-cms.component.scss']
})
export class AdminCMSComponent implements OnInit {
  mode:string=null;
  hasBackdrop:string=null;
  stateUICMS:string=null;
  showProfile:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.mode="over"
    this.hasBackdrop="true";
    this.stateUICMS="AllArticles"

  }
  getStateAdmin(value){
    this.stateUICMS=value
  }
  openAdminDashboard(){
    this.stateUICMS="Dashboard";
  }
  openAllArticles(){
    this.stateUICMS="AllArticles"
  }
  openArticlesReported(){
    this.stateUICMS="ArticlesReported"
  }

}
