import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import {ApiServiceService} from '../APIServices/api-service.service'
@Component({
  selector: 'app-details-post-related-article',
  templateUrl: './details-post-related-article.component.html',
  styleUrls: ['./details-post-related-article.component.scss']
})
export class DetailsPostRelatedArticleComponent implements OnInit {
  allRelatedArticle :any = null;
  @Input() IdArticle: string; 
  @Output() stateViewArticle = new EventEmitter<string>();
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getArticleById(this.IdArticle).subscribe((res) => {
      this.allRelatedArticle = res.RelatedArticle;
    })
  }
  showDetailPost(value:string){
    this.stateViewArticle.emit(value)  
  }
  
}
