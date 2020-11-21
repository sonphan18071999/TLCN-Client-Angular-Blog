import {Component, OnInit,HostListener } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import{Article} from './article';
import { CdkNestedTreeNode } from '@angular/cdk/tree';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {CreateArticleService }from './create-article.service'
import {CookieService} from 'ngx-cookie-service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

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
  Article = new Article()
  public Editor=ClassicEditor;
  localUrl: any[];
  MainImage:string;
  isLoaded:boolean=true;
  arrHashTag:any[]

  constructor(private _formBuilder: FormBuilder,
    private createArticleService:CreateArticleService,
    private cookieService:CookieService) { }

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

    /**Khoi tao image default */
    this.MainImage="../../assets/images/default-image.jpg"
    /**Khoi tao image default */

    //**Thêm dữ liệu của người post bài */
    this.Article.idUser=this.cookieService.get("userIdLogged");
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
  showPreviewMainImage(event: any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.localUrl = event.target.result;
          //Save image to model
          this.MainImage=this.localUrl.toString()    
          this.Article.AvatarPost=this.MainImage;
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
  saveTitleArticle(title){
    this.Article.tittle=title
  }
  saveDescriptionArticle(description){
    this.Article.description=description;
  }
  submitArticle(){
    this.isLoaded=false;
    this.Article.hashTag = [{name:"empty"}]
    this.hashTags.forEach(element => {
      this.Article.hashTag.push({name:element.name})
    });  

    this.createArticleService.submitArticle(this.Article).subscribe(res=>{
      console.log(res);
      alert("Create artcle successfully");
      if(res){
        this.isLoaded=true;
      }
    }
    );
    // console.log(this.Article);
  }
  resetForm(){
    
  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  hashTags: HashTag[] = [
    {name: 'Samsung'},
    {name: 'Apple'},
    {name: 'Funny'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.hashTags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(hashTag: HashTag): void {
    const index = this.hashTags.indexOf(hashTag);

    if (index >= 0) {
      this.hashTags.splice(index, 1);
    }
  }

}
export interface HashTag {
  name: string;
}
