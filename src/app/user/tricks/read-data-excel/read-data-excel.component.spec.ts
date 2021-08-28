import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDataExcelComponent } from './read-data-excel.component';

describe('ReadDataExcelComponent', () => {
  let component: ReadDataExcelComponent;
  let fixture: ComponentFixture<ReadDataExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDataExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDataExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
