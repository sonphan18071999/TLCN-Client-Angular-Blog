import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderArticleComponent } from './loader-article.component';

describe('LoaderArticleComponent', () => {
  let component: LoaderArticleComponent;
  let fixture: ComponentFixture<LoaderArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
