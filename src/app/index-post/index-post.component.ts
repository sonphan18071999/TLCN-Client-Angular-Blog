import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopUpPostContentComponent} from '../pop-up-post-content/pop-up-post-content.component';
import { Router } from '@angular/router';
import {IndexPostService} from'./index-post.service'
import {CookieService} from 'ngx-cookie-service';
import AOS from 'aos';

@Component({
  selector: 'app-index-post',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.scss'],
  providers: [CookieService]

})
export class IndexPostComponent implements OnInit {
  selectedFile:any;
  imagePath:any;
  allArticle:any;
  popularArticle:any;
  page:any;
  showPostArticle:boolean=false;
  author:any;
  constructor(public dialog: MatDialog,
    private router: Router,
    public indexPostService:IndexPostService,
    private _cookieService:CookieService) { 
    }
 
  ngOnInit(): void {
    AOS.init();
    this.page=0;
    this.getDataPaging();
    if(this._cookieService.get("userIdLogged")!=''){
      this.showPostArticle=true;
    }
  }
  getDataPaging(){
    return this.indexPostService.getAllArticle(this.page).subscribe((data: any[])=>{
      this.allArticle=data;
      this.author=this.allArticle.Author

      this.popularArticle = this.allArticle.PopularArticle;
      this.convertTimeToString(this.popularArticle);
      this.allArticle=this.allArticle.Article;  // Lấy tất cả những bài viết
       //Tiến hình đổi giờ mặc định sang string.
       this.convertTimeToString(this.allArticle);
       console.log(this.allArticle);
    })
  }

  convertTimeToString(data){
    //Đổi thành đã đăng cách đây mấy giờ
    var currentDate = new Date();
    if(data.length>1){
      for(var item of data){
        if(item.Article.postedOn.substring(0,4)==currentDate.getFullYear() &&
        item.Article.postedOn.substring(5,7)==currentDate.getMonth()+1 &&
        item.Article.postedOn.substring(8,10)==currentDate.getDate() )
        {
          // Nếu thời gian trong ngày hiện tại mới đổi. Không vẫn giữ nguyên
          item.Article.postedOn =currentDate.getHours()- item.Article.postedOn.substring(11,13)-7   +" hours a go"
        }else{
          item.Article.postedOn = item.Article.postedOn.substring(0,10)
        }
      }
    }else{
     console.log(data.Article);
     if(data.Article.postedOn.substring(0,4)==currentDate.getFullYear() &&
        data.Article.postedOn.substring(5,7)==currentDate.getMonth()+1 &&
        data.Article.postedOn.substring(8,10)==currentDate.getDate() )
        {
          // Nếu thời gian trong ngày hiện tại mới đổi. Không vẫn giữ nguyên
          data.Article.postedOn =currentDate.getHours()- data.Article.postedOn.substring(11,13)-7   +" hours a go"
        }else{
          data.Article.postedOn = data.Article.postedOn.substring(0,10)
        }
    }
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
  nextPage(){
    this.page+=1;
    this.allArticle=null;
    this.getDataPaging();
  }
  previousPage(){
    if(this.page-1==-1){
      this.page=0;
    }
    else{
      this.allArticle=null;
      this.page-=1;
      this.getDataPaging();
    }
  }
}

