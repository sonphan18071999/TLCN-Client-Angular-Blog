import { Component, OnInit, Inject } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiServiceService} from '../APIServices/api-service.service'
import { CookieService } from 'ngx-cookie-service';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {SocketioService } from'./socketio.service'
import AOS from 'aos';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ReportArticleComponent} from '../report-article/report-article.component'
@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss'],
  providers:[CookieService]
})
export class DetailsPostComponent implements OnInit {
  public Editor=ClassicEditor
  
  name = 'Angular 6';
  htmlContent = '';
  isShowForm=false;
  stateLike:Number;
  side="over";
  article:any;
  /**Id of article that we want to see detail. */
  idArticle:any;
  mainTitle:String;
  ContentInParts:any;
  commentContent:any;
  allComment:any;
  editorData:any;
  idParentComment:any;
  stateAnswer:boolean=true;
  infoUserComment:any;
  flag:boolean=true;
  showBookMark:boolean=true;
  infoAuthor : any = null;
  allHashTag : any=null;
  allRelatedArticle :any = null;

  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  constructor(private apiService: ApiServiceService,
    private cookieService: CookieService, private socketService: SocketioService, 
    private router: Router,public dialog: MatDialog
    ) {
  }
  ngOnInit(): void {
    /**Init animate */
    AOS.init();
    /**Init animate */
    /**Get id which set inside cookie of browser */
    this.idArticle  = this.cookieService.get('idDetailArticle');
    /**Get article by id */
    this.apiService.getArticleById(this.idArticle).subscribe((res) => {
      this.article = res;
      // console.log(JSON.stringify(res));
      this.article=this.article.Aricle
      this.mainTitle=this.article.tittle;
      this.ContentInParts = this.article.content;
      this.infoAuthor = res.Author;
      this.allHashTag = res.hashTag;
      this.allRelatedArticle = res.RelatedArticle;
      // console.log(this.allRelatedArticle);
    })
    this.getAllComment();
    /**Check saved article */
    this.apiService.checkArticle(this.cookieService.get("userIdLogged"),this.idArticle).subscribe((ok)=>{
      this.showBookMark=true;
    },(er)=>{
      this.showBookMark=false;
    })
  }
  
  getAllComment(){
    /**Get article by comment */
  this.apiService.getAllComment(this.idArticle).subscribe((allComment)=>{
      this.allComment = allComment;
    // console.log(JSON.stringify(this.allComment))
    })
    /**Get article by comment */
  }
  getUserInfo(idUser){
  this.apiService.getInforUser(idUser).subscribe((user)=>{
    // this.infoUserComment=user;
    console.log("Thong tin moi nguoi dung comment"+user)  
    })
  }
  changeState(){
    if(this.isShowForm==false){
      this.isShowForm=true
    }else{
      this.isShowForm=false;
    }
  }
  changeStateLike(index){
    if(this.stateLike==index){
      this.stateLike==-100;
    }else{
      this.stateLike=index
    }

  }
  saveEditor({ editor }: ChangeEvent){
    const data = editor.getData();
    this.commentContent=data   
  }
  sendComment(){
  if(this.cookieService.get("userIdLogged")==''){
    alert("You are not logged in yet!!")
  }else{
    if(this.commentContent == null){
      alert("Input cant be null")
    }else{
    if(this.idParentComment == null) //Khong reply comment
    {
      let commentParent = {
        "content":this.commentContent,
        "idUser":this.cookieService.get("userIdLogged"),
        "idArticle":this.idArticle,
        "nameUser":this.cookieService.get("userName")
      }
      this.apiService.postCommentParent(commentParent).subscribe((data)=>{  
        this.getAllComment();
         /**Configure socket io */
      this.autoReloadCommentRealTime();
      })
    }
    else{
      let commentChild = {
        "idParent":this.idParentComment,
        "childComment":{
          "contentChild":this.commentContent,
          "idUserChild":this.cookieService.get("userIdLogged"),
          "nameUserChild":this.cookieService.get("userName")
        }
      }
      this.apiService.postCommentChild(commentChild).subscribe((data)=>{ 
        this.getAllComment(); 
         /**Configure socket io */
        this.autoReloadCommentRealTime();
      })
    }
    }
  } 
  }
   autoReloadCommentRealTime(){
    this.socketService.emit('broadcast','typing user');
    this.socketService.listen('update state comment').subscribe((data)=>{
      if(data){
        this.getAllComment();
      }
    })
   }
   showAnswer(idComment){
     this.idParentComment = idComment;
   }
   cancelComment(){
     this.idParentComment=null;
   }
   sendFirstComment(){
    if(this.commentContent==null ){
      alert("Input cant be empty")
    }else if(this.cookieService.get("userIdLogged")==''){
      alert("You must loggin to comment on this article")
    }
    else{
      var comment = {
        content:this.commentContent,
        idUser:this.cookieService.get("userIdLogged"),
        idArticle:this.idArticle,
        "nameUser":this.cookieService.get("userName")
      }
      this.apiService.postCommentParent(comment).subscribe((data)=>{  
        this.getAllComment();
        this.autoReloadCommentRealTime();
      })
    }
   }
  SaveArticle(){
    this.apiService.saveArticle(this.cookieService.get("userIdLogged"), this.idArticle).subscribe(
      (res) => {
        if (res) {
          alert("Save article successfully")
          this.showBookMark=false;
        }
      }, (er) => {
        alert("Unmark successfully")
        this.showBookMark=true;
      })
  }
  openDialog() {
    this.dialog.open(ReportArticleComponent);
  }
  showDetailPost(id,title){
    this.cookieService.set( 'idDetailArticle', id ); // To Set Cookie
    this.router.navigate(['/detail-post',title]);
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };  
  }
}

