import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {postContentModel} from './postContentModel';

@Component({
  selector: 'app-pop-up-post-content',
  templateUrl: './pop-up-post-content.component.html',
  styleUrls: ['./pop-up-post-content.component.scss']
})
export class PopUpPostContentComponent implements OnInit {
  public Editor=ClassicEditor
  urls=[];
  postBodies:postContentModel[]=[];
  title:String;
  numberTitle:number=0;
  a:any;
  constructor() { }


  //Init models
  
  ngOnInit(): void {
    this.a = new postContentModel();
    this.numberTitle+=1;
    this.title= this.numberTitle+". ";
    this.a.Title= this.title;
    this.a.Description="";
    this.a.urls=[];
    this.postBodies.push(this.a);
  }

  onselect(e,index){
  
    if(e.target.files){
      for(let i = 0; i<File.length;i++){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any)=>{
          // this.urls.push(events.target.result);
          this.postBodies[index].urls.push(events.target.result);
          // console.log("Thằng mày muôn insert hình  nè "+index );
          // this.a.urls.push(events.target.result);
        }
      }
    }
    }
    // this.postBodies.push(this.a);
  removeAllImage(){
    this.urls=[];
  }
  addMorePostBody(){
    this.a = new postContentModel();
    this.numberTitle+=1;
    this.a.Title=this.numberTitle+". "
    this.postBodies.push(this.a);
    this.a.urls=[];
    this.a.Description="";
    // console.log("Post bodies la "+JSON.stringify( this.postBodies));
  }
  
}
