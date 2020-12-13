import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBanArticleComponent } from './dialog-ban-article.component';

describe('DialogBanArticleComponent', () => {
  let component: DialogBanArticleComponent;
  let fixture: ComponentFixture<DialogBanArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBanArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBanArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
