import { Component, HostListener, OnInit } from '@angular/core';
import {ActivatedRoute,Router  } from '@angular/router'
import { ApiServiceService } from '../../../APIServices/api-service.service'

@Component({
  selector: 'app-bullentin-board-detail-post',
  templateUrl: './bullentin-board-detail-post.component.html',
  styleUrls: ['./bullentin-board-detail-post.component.scss']
})
export class BullentinBoardDetailPostComponent implements OnInit {
  Play_Facts:Boolean=false;
  constructor(private activatedRoute: ActivatedRoute,
    private apiService:ApiServiceService,
    private router: Router) { }
  
  idDetail:any=null;
  DetailFact:any=null;
  InforUser:any=null;
  allFacts:any=null;
  idPreviousFact:any=null;
  idNextFact: any = null;
  
  async ngOnInit(): Promise<void> {
    await this.getIdDetailFact();
    await this.getDetailFacts();
    await this.getAllBullentinBoard();
    console.log(this.InforUser)
  }
  
  getIdDetailFact(){
    return this.activatedRoute.paramMap.subscribe(params => {
      this.idDetail = params.get('id');
    })
  }

  getDetailFacts() {
    return this.apiService.getDetailButtinBoard(this.idDetail).subscribe(ok=>{
      this.DetailFact = ok.BullentinBoard;
      this.InforUser = ok.AuthorInformation;
      console.log(this.DetailFact)
    })
  }

  changeStatePlay(){
    if(this.Play_Facts){
      this.Play_Facts=false;
    }else{
      this.Play_Facts=true;
    }
  }


  loadPreviousFacts(){
    
    //Tìm vị trí id hiện tại. Nếu có thì load cái trước nó
    for(var i=0;i<this.allFacts.length;i++){
      if(this.allFacts[i]._id==this.idDetail){
        if(this.allFacts[i-1]._id!=null){
           this.idDetail=this.allFacts[i-1]._id;
          return this.getDetailFacts();
        }else{
           this.idDetail;
           return this.getDetailFacts();
        }
      }
    }
  }

  loadNextFacts(){
    //Tìm vị trí id hiện tại. Nếu có thì load cái sau nó
     //Tìm vị trí id hiện tại. Nếu có thì load cái trước nó
     for(var i=0;i<this.allFacts.length;i++){
      console.log(this.allFacts[i])
      if(this.allFacts[i]._id==this.idDetail){
        if(this.allFacts[i+1]!=null && this.allFacts[i+1]!=undefined){
           this.idDetail=this.allFacts[i+1]._id;
           return this.getDetailFacts();
        }else{
           this.idDetail;
           return this.getDetailFacts();
        }
      }
    }
  }

  getAllBullentinBoard(){
    return this.apiService.getAllBullentinBoard().subscribe(ok=>{
      this.allFacts=ok.AllBullentinBoard
      this.allFacts.reverse();
    })
  }

  goBackToIndex(){
    this.router.navigate(['/index']);
  }

  backToHomepage(): void{
    this.router.navigate(['/index']);
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.backToHomepage();
  }
}
