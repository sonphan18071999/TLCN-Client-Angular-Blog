import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import AOS from 'aos';
import {ApiServiceService} from '../APIServices/api-service.service'
import { CookieService } from 'ngx-cookie-service';
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
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiServiceService:ApiServiceService,
    private cookieService:CookieService) {
    this.showArticleNumber=4;
   }
  ngOnInit(): void {
    /**Khoi tao animate */
    AOS.init();
    /**Khoi tao animate */
    /**Lay id cua nguoi dung */
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      // console.log(this.id)
    });
    /**Lay id cua nguoi dung */
    // Lấy những bài viết đã đăng của người dùng
    this.apiServiceService.getAllArticlePostedByUser(this.id).subscribe(res => {
     this.allPostedArticle=res.article;
    })

    //Clear idArticle
    this.cookieService.delete('idDetailArticle','/');
    this.cookieService.delete('idDetailArticle','/profile');


    /**Lấy information của người dùng */
    this.apiServiceService.getInforUser(this.id).subscribe(res=>{
      this.inforUser=res.UserInfo;
    });
    /**Lấy information của người dùng */


    /**Kiểm tra xem người dùng thật hay là guest*/
    if(this.cookieService.get("userIdLogged")==this.id){
      this.official_user=true;
    }
    /**Kiểm tra xem người dùng thật hay là guest*/
  }
  showMoreArticle(){
    this.showArticleNumber+=4;
  }
  showDetailPost(id,title){
    this.cookieService.set( 'idDetailArticle', id ); 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };  
    this.router.navigate(['/detail-post',title]);
    // window.location.reload();
    
  }
  showDetailArticle(id,title){
    this.cookieService.set( 'idDetailArticle', id ); // To Set Cookie
    this.router.navigate(['/detail-post',title]);
  }
  showSavedArticle(){
    this.countSavedArticle+=4;
    this.apiServiceService.getAllSavedArticleByUser(this.id).subscribe(res=>{
      this.allSavedArticle =res.SavedArticle
    })
  }

}
