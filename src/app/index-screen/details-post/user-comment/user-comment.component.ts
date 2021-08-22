import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from 'src/app/APIServices/api-service.service';
import { SocketioService } from '../socketio.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss']
})
export class UserCommentComponent implements OnInit {

  @Input() idArticle = '';
  public Editor = ClassicEditor;

  allComment: any;
  idParentComment: any;
  commentContent: string;
  stateLike: any;
  editorData: any;

  constructor(private apiService: ApiServiceService,
    private cookieService: CookieService,
    private location : Location,
    private router: Router,
    private socketService: SocketioService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.getAllComment();
  }

  autoReloadCommentRealTime() {
    this.socketService.emit('broadcast', 'typing user');
    this.socketService.listen('update state comment').subscribe((data) => {
      if (data) {
        this.getAllComment();
      }
    });
  }

  cancelComment() {
    this.idParentComment = null;
  }

  changeStateLike(index) {
    if (this.stateLike === index) {
      this.stateLike == -100;
    } else {
      this.stateLike = index;
    }
  }

  getAllComment() {
    this.apiService.getAllComment(this.idArticle).subscribe((allComment) => {
      this.allComment = allComment;
    });
  }

  saveEditor({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.commentContent = data;
  }

  sendComment() {
    if (this.cookieService.get('userIdLogged') == '') {
      this.toastr.warning('You are not logged in yet!!', 'Message');
    } else {
      if (this.commentContent == null) {
        this.toastr.warning("Input can't be null", 'Message');
      } else {
        if (this.idParentComment == null) {
          //Khong reply comment
          let commentParent = {
            content: this.commentContent,
            idUser: this.cookieService.get('userIdLogged'),
            idArticle: this.idArticle,
            nameUser: this.cookieService.get('userName'),
          };
          /**Post comment  */
          this.apiService.postCommentParent(commentParent).subscribe((data) => {
            this.getAllComment();
            /**Configure socket io */
            this.autoReloadCommentRealTime();
          });
          /**Post comment  */

          /**Post announcement */

          /**Post announcement */
        } else {
          let commentChild = {
            idParent: this.idParentComment,
            childComment: {
              contentChild: this.commentContent,
              idUserChild: this.cookieService.get('userIdLogged'),
              nameUserChild: this.cookieService.get('userName'),
            },
          };
          this.apiService.postCommentChild(commentChild).subscribe((data) => {
            this.getAllComment();
            /**Configure socket io */
            this.autoReloadCommentRealTime();
          });
        }
      }
    }
  }

  sendFirstComment() {
    if (this.commentContent == null) {
      this.toastr.warning('Input cant be empty', 'Message');
    } else if (this.cookieService.get('userIdLogged') == '') {
      this.router.navigateByUrl('/login');
    } else {
      var comment = {
        content: this.commentContent,
        idUser: this.cookieService.get('userIdLogged'),
        idArticle: this.idArticle,
        nameUser: this.cookieService.get('userName'),
      };

      /**Post comment */
      this.apiService.postCommentParent(comment).subscribe((data) => {
        this.getAllComment();
        this.autoReloadCommentRealTime();
      });
      /**Post comment */

      /**Post Announcement */
      this.apiService
        .createAnnouncement(
          this.cookieService.get('userIdLogged'),
          'đã comment vào bài viết',
          'Comment',
          this.idArticle
        )
        .subscribe((data) => {
          if (data.announcement != null) {
            console.log('Cant save announcement');
          } else {
            console.log('Save annoucement successfully');
          }
        });
      /**Post Announcement */
    }
  }
  
  showAnswer(idComment) {
    this.idParentComment = idComment;
  }

  viewUserProfile(item: string) {
    this.location.go("/profile/"+item)
  }
}
