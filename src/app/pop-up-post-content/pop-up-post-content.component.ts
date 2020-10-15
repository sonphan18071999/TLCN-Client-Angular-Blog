import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {NgForm} from '@angular/forms';
import {postContentModel} from './postContentModel';

@Component({
  selector: 'app-pop-up-post-content',
  templateUrl: './pop-up-post-content.component.html',
  styleUrls: ['./pop-up-post-content.component.scss']
})
export class PopUpPostContentComponent implements OnInit {
  public Editor=ClassicEditor
  url:String;
  urls=[];
  postBodies:postContentModel[]=[];
  title:String;
  numberTitle:number=0;
  a:any;
  openPartTwo:boolean;
  ContentPart: String="";
  constructor() { 

  }
  switchForm:String;
  //Init models

  ngOnInit(): void {
    // Đầu tiên tạo model.
    // Tạo một biến a là kiểu của model đó.
    // Xong gắn giá trị cho biến đó.
    // xog đẩy vào array postBodies.
    this.switchForm="Next";
    this.openPartTwo=false;
    this.a = new postContentModel();
    this.numberTitle+=1;
    this.title= this.numberTitle+". ";
    this.a.Title= this.title;
    this.a.Description="";
    this.a.urls=[];
    this.postBodies.push(this.a);
    this.url="../../assets/images/default-image.jpg"
    
  }

  onselect(e,index){
    if(e.target.files){
      for(let i = 0; i<File.length;i++){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any)=>{
          this.postBodies[index].urls.push(events.target.result);
        }
      }
    }
  }
  onSubmit(f: NgForm){
    alert(f.value.first)
  }
  onselectImageShowUp(e){
    // Chọn ảnh đại diện bài post
    if(e.target.files){
      for(let i = 0; i<File.length;i++){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any)=>{
          this.url=events.target.result;
        }
      }
    }
  }
    // this.postBodies.push(this.a);
  removeAllImage(index){
    this.postBodies[index].urls=[];
  }
  switchPart2(){
    if(this.openPartTwo){
      this.openPartTwo=false;
      this.switchForm="Next";
    }
    else{
      this.openPartTwo=true;
      this.switchForm="Previous"
    }
  }
  addMorePostBody(){
    this.a = new postContentModel();
    this.numberTitle+=1;
    this.a.Title=this.numberTitle+". ";
    this.postBodies.push(this.a);
    this.a.urls=[];
    this.a.Description="";
  }
  ngAfterViewInit() {
    
  }
  saveContent(){
    alert("Hello wworld");
  }
 
  
}
