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
  constructor() { }

  ngOnInit(): void {
    this.mode="over"
    this.hasBackdrop="true";
    this.stateUICMS="Dashboard"

  }
  getStateAdmin(value){
    this.stateUICMS=value
  }

}
