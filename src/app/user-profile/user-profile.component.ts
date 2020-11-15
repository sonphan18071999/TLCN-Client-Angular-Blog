import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  side="over";
  id:String;
  constructor(private activatedRoute: ActivatedRoute,private router: Router) {
    
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
  }
}
