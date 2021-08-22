import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCMSComponent } from './admin-cms.component';

describe('AdminCMSComponent', () => {
  let component: AdminCMSComponent;
  let fixture: ComponentFixture<AdminCMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
