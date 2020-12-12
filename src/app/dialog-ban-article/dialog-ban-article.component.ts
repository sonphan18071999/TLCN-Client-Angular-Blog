import { Component, OnInit,Output,EventEmitter,Inject } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CookieService} from 'ngx-cookie-service'
@Component({
  selector: 'app-dialog-ban-article',
  templateUrl: './dialog-ban-article.component.html',
  styleUrls: ['./dialog-ban-article.component.scss']
})
export class DialogBanArticleComponent implements OnInit {
  selectedItem:string;
  constructor(private cookieService:CookieService,
    public dialogRef: MatDialogRef<DialogBanArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  levelBan =[{'level':'0'},{'level':'1'},{'level':'2'},{'level':'3'},{'level':'none'}]
  levelControl:any;

  ngOnInit(): void {
    this.levelControl = new FormControl(this.levelBan[0].level);
  }
  showSelectedItem(){
    this.saveMessage();
  }
  saveMessage() {
    this.dialogRef.close(this.levelControl.value);
  } 
  
  
}
