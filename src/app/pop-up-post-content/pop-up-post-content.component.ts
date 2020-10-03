import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-pop-up-post-content',
  templateUrl: './pop-up-post-content.component.html',
  styleUrls: ['./pop-up-post-content.component.scss']
})
export class PopUpPostContentComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
