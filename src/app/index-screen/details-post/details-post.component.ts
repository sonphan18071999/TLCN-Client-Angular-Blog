import { Component, OnInit, Output, EventEmitter, Input ,AfterViewInit,OnChanges } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AOS from 'aos';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { ApiServiceService } from '../../APIServices/api-service.service'
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { SocketioService } from'./socketio.service'
import { ReportArticleComponent} from '../../report-article/report-article.component'

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss'],
  providers: [CookieService],
})
export class DetailsPostComponent implements OnInit, AfterViewInit, OnChanges {
  public Editor = ClassicEditor;

  name = 'Angular 6';
  htmlContent = '';
  isShowForm = false;
  stateLike: Number;
  side = 'over';
  article: any;
  /**Id of article that we want to see detail. */
  idArticle: any;
  mainTitle: String;
  ContentInParts: any;
  commentContent: any;
  allComment: any;
  editorData: any;
  idParentComment: any;
  stateAnswer: boolean = true;
  infoUserComment: any;
  flag: boolean = true;
  showBookMark: boolean = true;
  infoAuthor: any = null;
  allHashTag: any = null;
  showConfigureArticleButton: Boolean = false;
  editMode: boolean = false;
  tempContentEditMode: any = null; //Lưu những nội dung tạm thời để update.
  localUrl: any[];
  loading: boolean = false;
  editTitleMode: boolean = false;
  @Output() setStateDetailPost = new EventEmitter<string>(); //Event tra ve loading item
  @Input() idArticleDetail: string;

  public model = {
    editorData: '<p>Hello, world!</p>',
  };

  constructor(
    private apiService: ApiServiceService,
    private cookieService: CookieService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }
  
  ngAfterViewInit(): void {
    this.ngOnInit();
  }

  ngOnInit(): void {
    /**Init animate */
    AOS.init();
    /**Init animate */
    this.getDetailArticle(); //Read data of article
    /**Check saved article */
    this.apiService
      .checkArticle(this.cookieService.get('userIdLogged'), this.idArticle)
      .subscribe(
        (ok) => {
          this.showBookMark = true;
        },
        (er) => {
          this.showBookMark = false;
        }
      );
    //Check author authenitcation to show button confiure article
    this.checkAuthor();
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  showDetailPost(id) {
    this.cookieService.set('idDetailArticle', id);
    this.setStateDetailPost.emit('Detail-Post');
    this.getDetailArticle();
  }

  async getDetailArticle() {
    this.ContentInParts = null;
    /**Get id which set inside cookie of browser */
    await this.route.params.subscribe(params => {
      this.idArticle = params['id'];
    });

    await this.apiService.getArticleById(this.idArticle).subscribe((res) => {
      this.article = res;
      this.article = this.article.Aricle;
      this.mainTitle = this.article.tittle;
      this.ContentInParts = this.article.content;
      this.infoAuthor = res.Author;
      this.allHashTag = res.hashTag;
    });
  }



  getUserInfo(idUser) {
    this.apiService.getInforUser(idUser).subscribe((user) => {
      // console.log(user);
    });
  }

  changeState() {
    if (this.isShowForm == false) {
      this.isShowForm = true;
    } else {
      this.isShowForm = false;
    }
  }

  saveEditor({ editor }: ChangeEvent) {
    const data = editor.getData();
    this.commentContent = data;
  }

  SaveArticle() {
    this.apiService
      .saveArticle(this.cookieService.get('userIdLogged'), this.idArticle)
      .subscribe(
        (res) => {
          if (res) {
            this.toastr.success('Save article successfully', 'Announcement!');
            this.showBookMark = false;
          }
        },
        (er) => {
          this.toastr.success('Unmark successfully', 'Announcement!');
          this.showBookMark = true;
        }
      );
  }

  openDialog() {
    this.dialog.open(ReportArticleComponent);
  }

  FollowAuthor() {
    this.toastr.success('Follow author success', 'Announcement!');
  }

  checkAuthor() {
    this.apiService
      .checkAuthorOfArticle(
        this.idArticle,
        this.cookieService.get('userIdLogged')
      )
      .subscribe((data) => {
        if (data.Message == 'Unauthenticated') {
          this.showConfigureArticleButton = false;
        } else {
          this.showConfigureArticleButton = true;
        }
      });
  }

  ChangeToEditMode() {
    this.editMode = true;
  }
  cancelEditMode() {
    this.editMode = false;
    this.getDetailArticle();
  }
  InsertMoreContent() {
    this.tempContentEditMode = {
      partContent: '<i>Insert your new content right here...</i>',
      images: '../../assets/images/default-image.jpg',
    };
    this.ContentInParts.push(this.tempContentEditMode);
  }
  removeContentInpart(index) {
    this.ContentInParts[index].partContent = null;
  }
  removeImageInpart(index) {
    this.ContentInParts[index].images = null;
  }
  showPreviewImage(event: any, index) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        //Save image to model
        this.ContentInParts[index].images = this.localUrl.toString();
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  updateContent() {
    this.loading = true;
    this.apiService
      .updateContentOfArticle(this.idArticle, this.ContentInParts)
      .subscribe(
        (res) => {
          this.toastr.success('Update successfully', 'Message');
          if (res) {
            this.loading = false;
            this.cancelEditMode();
          }
        },
        (err) => {
          this.toastr.error('Update unsuccessfully', 'Message');
        }
      );
  }

  saveContentEditMode({ editor }: ChangeEvent, index) {
    const data = editor.getData();
    this.ContentInParts[index].partContent = data;
  }

  ChangeToEditTitleMode() {
    this.editTitleMode = true;
  }

  funcSetStateDetail(value: string) {
    this.setStateDetailPost.emit(value);
  }

}

