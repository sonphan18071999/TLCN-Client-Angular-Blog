import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-screen',
  templateUrl: './index-screen.component.html',
  styleUrls: ['./index-screen.component.scss']
})
export class IndexScreenComponent implements OnInit {
  side="over";

  constructor() { }

  ngOnInit(): void {
  }

}
