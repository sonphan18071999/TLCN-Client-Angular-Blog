import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingApprovalArticleComponent } from './waiting-approval-article.component';

describe('WaitingApprovalArticleComponent', () => {
  let component: WaitingApprovalArticleComponent;
  let fixture: ComponentFixture<WaitingApprovalArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingApprovalArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingApprovalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
