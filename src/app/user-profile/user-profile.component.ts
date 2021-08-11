import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import AOS from 'aos';
import {ApiServiceService} from '../APIServices/api-service.service'
import { CookieService } from 'ngx-cookie-service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [CookieService]
})
export class UserProfileComponent implements OnInit {
  side="over";
  id:String;
  allPostedArticle :any;
  showArticleNumber:number;
  allSavedArticle :any;
  countSavedArticle :number=0;
  inforUser:any;
  official_user: Boolean=false;
  avatarUser:any;
  @Output() setStateUserProfile = new EventEmitter<string>();
  currentUrl:string=null;
  // @Output() setStateIndexPost = new EventEmitter<string>();  //Event tra ve loading item

  constructor(private route: ActivatedRoute,
    private router: Router,
    private apiServiceService:ApiServiceService,
    private cookieService:CookieService,
    private location:Location) {
    this.showArticleNumber=4;
   }
  async ngOnInit(): Promise<void> {
    AOS.init();
    await this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    await this.apiServiceService.getAllArticlePostedByUser(this.id).subscribe(res => {
     this.allPostedArticle=res.article;
    })

    await this.apiServiceService.getInforUser(this.id).subscribe(res=>{
      this.inforUser=res.UserInfo;
      this.avatarUser=this.inforUser.userAvatar
    });


    /**Kiểm tra xem người dùng thật hay là guest*/
    if(this.cookieService.get("userIdLogged")==this.id){
      this.official_user=true;
    }
    /**Kiểm tra xem người dùng thật hay là guest*/

    /**Set state User profile */
    // this.funcSetStateUserProfile("User-Profile");
    /**Set state User profile */
  }
  showMoreArticle(){
    this.showArticleNumber+=4;
  }
  showDetailPost(id,title){
    this.cookieService.set( 'idDetailArticle', id ); 
    this.location.go("/detail-post/"+title);
    this.funcSetStateUserProfile("Detail-Post");
  }

  showSavedArticle(){
    this.countSavedArticle+=4;
    this.apiServiceService.getAllSavedArticleByUser(this.id).subscribe(res=>{
      this.allSavedArticle =res.SavedArticle
    })
  }
  funcSetStateUserProfile(value:string){
    this.setStateUserProfile.emit(value)
  }
}
