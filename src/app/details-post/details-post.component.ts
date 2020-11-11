import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiServiceService} from '../APIServices/api-service.service'
import {ActivatedRoute} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {SocketioService } from'./socketio.service'
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
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  constructor(private apiService: ApiServiceService,
    private cookieService: CookieService, private socketService: SocketioService) {

  }

  ngOnInit(): void {
    /**Get id which set inside cookie of browser */
    this.idArticle  = this.cookieService.get('idDetailArticle');
  
    /**Get article by id */
    this.apiService.getArticleById(this.idArticle).subscribe((res) => {
      this.article = res;
      // console.log(JSON.stringify(res));
      this.article=this.article.Aricle
      this.mainTitle=this.article.tittle;
      this.ContentInParts = this.article.content;
    })
    this.getAllComment();
    
    /**Configure socket io */
    this.socketService.setupSocketConnection();
  }
  
  getAllComment(){
    /**Get article by comment */
  this.apiService.getAllComment(this.idArticle).subscribe((allComment)=>{
      this.allComment = allComment;
      console.log(this.allComment.Comment);
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
    this.socketService.someoneTypingEvent(); 
  }
  sendComment(){
    if(this.idParentComment==null) //Khong reply comment
    {
      let commentParent = {
        "content":this.commentContent,
        "idUser":this.cookieService.get("userIdLogged"),
        "idArticle":this.idArticle
      }
      this.apiService.postCommentParent(commentParent).subscribe((data)=>{  
        this.getAllComment();
      })
    }
    else{
      let commentChild = {
        "idParent":this.idParentComment,
        "childComment":{
          "contentChild":this.commentContent,
          "idUserChild":this.cookieService.get("userIdLogged")
        }
      }
      this.apiService.postCommentChild(commentChild).subscribe((data)=>{ 
        this.getAllComment(); 
      })
    }
    
   }
   showAnswer(idComment){
     this.idParentComment = idComment;
   }
   cancelComment(){
     this.idParentComment=null;
   }
   sendFirstComment(){
    var comment = {
      content:this.commentContent,
      idUser:this.cookieService.get("userIdLogged"),
      idArticle:this.idArticle
    }
    this.apiService.postCommentParent(comment).subscribe((data)=>{  
      this.getAllComment();
    })
    
   }
}








