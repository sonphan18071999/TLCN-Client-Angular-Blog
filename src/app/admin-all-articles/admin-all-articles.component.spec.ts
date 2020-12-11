import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllArticlesComponent } from './admin-all-articles.component';

describe('AdminAllArticlesComponent', () => {
  let component: AdminAllArticlesComponent;
  let fixture: ComponentFixture<AdminAllArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
