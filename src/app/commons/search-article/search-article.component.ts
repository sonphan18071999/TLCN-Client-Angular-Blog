import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.scss']
})
export class SearchArticleComponent implements OnInit {
  searchContent:string;

  constructor() { }

  ngOnInit(): void {
  }
  searchBar(){
    console.log("Hello world"+this.searchContent);
    
  }

}
