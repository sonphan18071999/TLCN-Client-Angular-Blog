import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  side="over";

  constructor() { }

  ngOnInit(): void {
  }
  
  typesOfShoes: string[] = ['Tổng quan'];
    
}
