import {Component, OnInit,HostListener } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import{Article} from './article';
import { CdkNestedTreeNode } from '@angular/cdk/tree';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class CreateArticleComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  Article= new Article()
  public Editor=ClassicEditor;
  localUrl: any[];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /**Khai bao part cua mat-stepper */
    this.firstFormGroup = this._formBuilder.group({
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    /**Khai bao part cua mat-stepper */

    /**Khoi tao article */
    
    //Array trong typescript cần khởi tạo trước.
    this.Article.content=[{partContent:null,images:null}];
    /**Khoi tao article */
  }
  addMoreContent(){
    this.Article.content.push({partContent:null,images:null})

    console.log(this.Article)
   
  }
  
  showPreviewImage(event: any,index) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.localUrl = event.target.result;
            //Save image to model
            this.Article.content[index].images=this.localUrl.toString()    
            console.log(this.Article)
        }
        reader.readAsDataURL(event.target.files[0]);
        
    }
  }
  saveEditor(  { editor }: ChangeEvent,index){
    const data = editor.getData();
    //Save content.
    this.Article.content[index].partContent=data    
    console.log(this.Article)
    console.log(data)
  }

}
