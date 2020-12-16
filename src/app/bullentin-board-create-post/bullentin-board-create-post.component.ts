import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../APIServices/api-service.service'
import {CookieService} from 'ngx-cookie-service'
import {ToastrService } from 'ngx-toastr';
import {MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bullentin-board-create-post',
  templateUrl: './bullentin-board-create-post.component.html',
  styleUrls: ['./bullentin-board-create-post.component.scss']
})
export class BullentinBoardCreatePostComponent implements OnInit {
  images:[]
  title:String=null;
  factCreate:facts;
  userName:string;
  constructor(private apiService: ApiServiceService,
    private cookieService:CookieService,
    private toast:ToastrService,
    public dialogRef: MatDialogRef<BullentinBoardCreatePostComponent>) { }

  ngOnInit(): void {
    this.userName=this.cookieService.get('userName')
    this.factCreate={
      imgUrl: '',
      title:'',
      idAuthor:'',
    }
  }
  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
            // this.localUrl = event.target.result;
            //Save image to model
            this.images=event.target.result;
            this.factCreate.imgUrl=event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    }
  }
  submit(){
    this.factCreate.title= this.title;
    this.factCreate.idAuthor= this.cookieService.get('userIdLogged');
    
    if(this.factCreate.idAuthor=='' || this.factCreate.idAuthor==null){
      return this.toast.warning("You must login first","Warning");
    }
    else if(this.factCreate.title=='' || this.factCreate.imgUrl=='' ){//Kiểm tra dữ liệu có null không đã
     return this.toast.warning("Title and Image cant be empty","Warning");
    }else{
      return this.apiService.createBullentinBoard(this.factCreate).subscribe(ok=>{
        this.toast.success("Create new Fact successfully","Message");
        this.dialogRef.close();

      },er=>{
        this.toast.error("We sorry! Something went wrong. Please try later","Message");
      })
    }
  }
}
interface facts{
  imgUrl: String,
  title:String,
  idAuthor:String,
}
