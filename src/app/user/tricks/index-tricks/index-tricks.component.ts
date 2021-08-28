import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-tricks',
  templateUrl: './index-tricks.component.html',
  styleUrls: ['./index-tricks.component.scss']
})
export class IndexTricksComponent implements OnInit {

  PROJECT_TITLE = 'Image Slider 360';
  READ_DATA_EXCEL = 'Read Data Excel';
  MAIL_SERVICE = 'Mail Service';

  listProject: string[] = [this.PROJECT_TITLE, this.READ_DATA_EXCEL,this.MAIL_SERVICE, 'Others'];
  projectShown = "";

  constructor() { }

  ngOnInit(): void {
    this.projectShown = this.listProject[2];
  }

  switchComponent(item:string): void{
    this.projectShown = item;
  }
}
