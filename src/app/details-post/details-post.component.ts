import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss']
})
export class DetailsPostComponent implements OnInit {
  public Editor=ClassicEditor
  name = 'Angular 6';
  htmlContent = '';
  isShowForm=false;
  stateLike=false;
  constructor() { }

  ngOnInit(): void {
  }


  changeState(){
    
    if(this.isShowForm==false){
      this.isShowForm=true
    }else{
      this.isShowForm=false;
    }
  }
  changeStateLike(){
    if(this.stateLike){
      this.stateLike=false;
    }
    else
    this.stateLike=true;

  }

}
