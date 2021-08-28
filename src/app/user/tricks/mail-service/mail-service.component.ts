import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-mail-service',
  templateUrl: './mail-service.component.html',
  styleUrls: ['./mail-service.component.scss']
})
export class MailServiceComponent implements OnInit {
  public Editor = ClassicEditor;
  dragAndDropModal: any;
  constructor() { }

  ngOnInit(): void {
    this.dragAndDropModal='<p><i>Éo có gì hết chơn </i></p>'
  }

  addImage(): void{
    this.dragAndDropModal += "<img src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg' />"
  }

  addVideo(): void{
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
  }
}
