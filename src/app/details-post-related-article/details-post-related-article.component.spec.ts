import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPostRelatedArticleComponent } from './details-post-related-article.component';

describe('DetailsPostRelatedArticleComponent', () => {
  let component: DetailsPostRelatedArticleComponent;
  let fixture: ComponentFixture<DetailsPostRelatedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPostRelatedArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPostRelatedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
