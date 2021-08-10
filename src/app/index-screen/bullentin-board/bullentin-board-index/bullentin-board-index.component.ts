import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BullentinBoardCreatePostComponent } from '../bullentin-board-create-post/bullentin-board-create-post.component'
import { CookieService } from 'ngx-cookie-service'
import { ApiServiceService } from '../../../APIServices/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bullentin-board-index',
  templateUrl: './bullentin-board-index.component.html',
  styleUrls: ['./bullentin-board-index.component.scss']
})
export class BullentinBoardIndexComponent implements OnInit {

  allFacts : any;
  constructor(private dialog: MatDialog,private cookieService:CookieService,
    private apiService:ApiServiceService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getAllBullentinBoard()
  }
  getAllBullentinBoard(){
    return this.apiService.getAllBullentinBoard().subscribe(ok=>{
      this.allFacts=ok.AllBullentinBoard
      this.allFacts.reverse();

    })
  }
  
  showDialogCreate(){
    const dialogRef = this.dialog.open(BullentinBoardCreatePostComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getAllBullentinBoard()
    });
  }
  showDetailFacts(id){
    this.router.navigate(['facts/detail/',id]);
  }
}
