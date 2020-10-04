import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PopUpPostContentComponent} from '../pop-up-post-content/pop-up-post-content.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-post',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.scss']
})
export class IndexPostComponent implements OnInit {

  constructor(public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
  }
  showDetailPost(){
    this.router.navigate(['detail-post']);
  }
  openDialog() {
    this.dialog.open(PopUpPostContentComponent)
  }
}

