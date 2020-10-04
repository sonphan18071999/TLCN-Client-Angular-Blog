import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-pop-up-post-content',
  templateUrl: './pop-up-post-content.component.html',
  styleUrls: ['./pop-up-post-content.component.scss']
})
export class PopUpPostContentComponent implements OnInit {
  constructor() { }
  public Editor=ClassicEditor
 
  ngOnInit(): void {
    this.Editor.editorConfig = function(config){
      config.toolbar = [{
        name:'basicstyles',items:['Bold','Italic','Strike','-','RemoveFormat']
      }]
    }
  }

  urls=[];
  onselect(e){
    if(e.target.files){
      for(let i = 0; i<File.length;i++){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        reader.onload = (events: any)=>{
          this.urls.push(events.target.result);
        }
      }
    }
  }
  removeAllImage(){
    this.urls=[];
  }
}
