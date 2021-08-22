import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticlesReportedComponent } from './admin-articles-reported.component';

describe('AdminArticlesReportedComponent', () => {
  let component: AdminArticlesReportedComponent;
  let fixture: ComponentFixture<AdminArticlesReportedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminArticlesReportedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArticlesReportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
