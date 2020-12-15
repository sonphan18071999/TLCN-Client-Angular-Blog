import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullentinBoardIndexComponent } from './bullentin-board-index.component';

describe('BullentinBoardIndexComponent', () => {
  let component: BullentinBoardIndexComponent;
  let fixture: ComponentFixture<BullentinBoardIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullentinBoardIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullentinBoardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
