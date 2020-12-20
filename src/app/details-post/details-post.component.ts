import { Component, OnInit, Inject, Output, EventEmitter, Input ,AfterViewInit,OnChanges } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiServiceService} from '../APIServices/api-service.service'
import { CookieService } from 'ngx-cookie-service';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import {SocketioService } from'./socketio.service'
import AOS from 'aos';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ReportArticleComponent} from '../report-article/report-article.component'
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss'],
  providers:[CookieService]
})
export class DetailsPostComponent implements OnInit,AfterViewInit, OnChanges {
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
  showConfigureArticleButton: Boolean = false;
  editMode : boolean = false;
  tempContentEditMode: any = null;      //Lưu những nội dung tạm thời để update.
  localUrl: any[];
  loading:boolean =false;
  editTitleMode : boolean = false;
  @Output() setStateDetailPost = new EventEmitter<string>();  //Event tra ve loading item
  @Input() idArticleDetail: string;
  
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  constructor(private apiService: ApiServiceService,
    private cookieService: CookieService, private socketService: SocketioService, 
    private router: Router,public dialog: MatDialog,private toastr: ToastrService,
    private location:Location
    ) {
  }
  ngAfterViewInit(): void {
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.autoReloadCommentRealTime();
    /**Init animate */
    AOS.init();
    /**Init animate */
    this.getDetailArticle();      //Read data of article
    this.getAllComment();
    /**Check saved article */
    this.apiService.checkArticle(this.cookieService.get("userIdLogged"),this.idArticle).subscribe((ok)=>{
      this.showBookMark=true;
    },(er)=>{
      this.showBookMark=false;
    })
    //Check author authenitcation to show button confiure article
    this.checkAuthor();
  }
  ngOnChanges() {
    this.ngOnInit();
  }
  showDetailPost(id){
    this.cookieService.set('idDetailArticle',id);
    this.setStateDetailPost.emit('Detail-Post')
    this.getDetailArticle();
  }
  getDetailArticle(){
    this.ContentInParts=null;
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
      // console.log(user);
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
    this.toastr.warning("You are not logged in yet!!","Message")
  }else{
    if(this.commentContent == null){
      this.toastr.warning("Input can't be null","Message")
    }else{
    if(this.idParentComment == null) //Khong reply comment
    {
      let commentParent = {
        "content":this.commentContent,
        "idUser":this.cookieService.get("userIdLogged"),
        "idArticle":this.idArticle,
        "nameUser":this.cookieService.get("userName")
      }
      /**Post comment  */
      this.apiService.postCommentParent(commentParent).subscribe((data)=>{  
        this.getAllComment();
         /**Configure socket io */
      })
      /**Post comment  */

      /**Post announcement */

      /**Post announcement */
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
      this.toastr.warning("Input cant be empty","Message")
    }else if(this.cookieService.get("userIdLogged")==''){
      this.router.navigateByUrl('/login');
    }
    else{
      var comment = {
        content:this.commentContent,
        idUser:this.cookieService.get("userIdLogged"),
        idArticle:this.idArticle,
        "nameUser":this.cookieService.get("userName")
      }

      /**Post comment */
      this.apiService.postCommentParent(comment).subscribe((data)=>{  
        this.getAllComment();
      })
      /**Post comment */

      /**Post Announcement */
      this.apiService.createAnnouncement(this.cookieService.get("userIdLogged"),
      "đã comment vào bài viết","Comment",this.idArticle).subscribe((data)=>{
        if(data.announcement!=null){
          console.log("Cant save announcement");
        }else{
          console.log("Save annoucement successfully");
        }
      })
      /**Post Announcement */
    }
   }
  SaveArticle(){
    this.apiService.saveArticle(this.cookieService.get("userIdLogged"), this.idArticle).subscribe(
      (res) => {
        if (res) {
          this.toastr.success('Save article successfully', 'Announcement!');
          this.showBookMark=false;
        }
      }, (er) => {
        this.toastr.success('Unmark successfully', 'Announcement!');
        this.showBookMark=true;
      })
  }
  openDialog() {
    this.dialog.open(ReportArticleComponent);
  }

  FollowAuthor(){
    this.toastr.success('Follow author success', 'Announcement!');
  }
  checkAuthor(){
  this.apiService.checkAuthorOfArticle(this.idArticle,this.cookieService.get("userIdLogged")).subscribe(data=>{
       if(data.Message=="Unauthenticated"){
         this.showConfigureArticleButton=false;
       }else{
         this.showConfigureArticleButton=true
       }
  })
  }
  ChangeToEditMode(){
    this.editMode=true;
  }
  cancelEditMode(){
    this.editMode=false;
    this.getDetailArticle();   
  }
  InsertMoreContent(){
    this.tempContentEditMode= {
      "partContent":"<i>Insert your new content right here...</i>",
      "images":"../../assets/images/default-image.jpg"
    }
    this.ContentInParts.push(this.tempContentEditMode)
  }
  removeContentInpart(index){
    this.ContentInParts[index].partContent=null
  }
  removeImageInpart(index){
    this.ContentInParts[index].images=null
  }
  showPreviewImage(event: any,index) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        //Save image to model
        this.ContentInParts[index].images = this.localUrl.toString()
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  updateContent(){
    this.loading=true;
    this.apiService.updateContentOfArticle(this.idArticle,this.ContentInParts)
    .subscribe(res=>{
      this.toastr.success("Update successfully","Message")
      if(res){
        this.loading=false;
        this.cancelEditMode();
      }
    },err=>{
      this.toastr.error("Update unsuccessfully","Message")
    })
  }
  saveContentEditMode(  { editor }: ChangeEvent,index){
    const data = editor.getData();
    this.ContentInParts[index].partContent=data    
  }
  ChangeToEditTitleMode(){
    this.editTitleMode=true;
  }
  funcSetStateDetail(value:string){
    this.setStateDetailPost.emit(value)
  }
  viewUserProfile(item: string){
    this.location.go("/profile/"+item)
    this.funcSetStateDetail("User-Profile")
  }
}

