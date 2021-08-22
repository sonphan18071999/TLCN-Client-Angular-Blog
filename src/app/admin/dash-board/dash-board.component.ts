import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  @Output() showDashBoard = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.setStateForDashboard("Dashboard");
    AOS.init();

  }
  setStateForDashboard(value){
    this.showDashBoard.emit(value)
  }

  
}
