import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopUpPostContentComponent} from '../pop-up-post-content/pop-up-post-content.component';
import { Router } from '@angular/router';
import {IndexPostService} from'./index-post.service'
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-index-post',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.scss'],
  providers: [CookieService]

})
export class IndexPostComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private router: Router,
    public indexPostService:IndexPostService,
    private _cookieService:CookieService) { }
  selectedFile:any;
  imagePath:any;
  allArticle:any;
  
  ngOnInit(): void {
    this.indexPostService.getAllArticle().subscribe((data: any[])=>{
    this.allArticle=data;
    this.allArticle=this.allArticle.Article;
    // this.allArticle.Article.forEach(element => {
    //   console.log("Tittle: "+element.tittle)
    // });
  }) 
  }
  showDetailPost(id,title){
    this._cookieService.set( 'idDetailArticle', id ); // To Set Cookie

    this.router.navigate(['/detail-post',title]);

    // alert(id);
  }
  openDialog() {
    this.dialog.open(PopUpPostContentComponent)
  }
  CreateNewArticle(){
    this.router.navigate(['create-article']);
  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    this.selectedFile = files[0];
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    // var reader = new FileReader();
    this.imagePath = files;
    // reader.readAsDataURL(files[0]);
    // console.log(reader.readAsDataURL(files[0]))
  }
  

  postImage(){
    var a ={
      photo:URL.createObjectURL(this.imagePath[0])
    }
    // this.indexPostService.postImageToServer(a).subscribe(
    //   res=>{
    //     console.log("Send Image successfully")
    //   },
    //   err=>{
    //     console.log("Send image not successfully"+err);
    //   }
    // )
    var reader = new FileReader();
    reader.readAsDataURL(this.imagePath[0]); 
    reader.onloadend = function() {
        var base64data = reader.result;                
        console.log(base64data);
    }
    // console.log(JSON.stringify(a))
  }

}

