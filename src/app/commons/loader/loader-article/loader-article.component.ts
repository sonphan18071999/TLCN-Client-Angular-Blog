import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-article',
  templateUrl: './loader-article.component.html',
  styleUrls: ['./loader-article.component.scss']
})
export class LoaderArticleComponent implements OnInit {

  @Input() display = "horizontal";
  constructor() { }

  ngOnInit(): void {
  }

}
