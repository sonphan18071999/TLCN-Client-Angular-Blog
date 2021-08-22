import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDialogOptionComponent } from './admin-dialog-option.component';

describe('AdminDialogOptionComponent', () => {
  let component: AdminDialogOptionComponent;
  let fixture: ComponentFixture<AdminDialogOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDialogOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDialogOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
