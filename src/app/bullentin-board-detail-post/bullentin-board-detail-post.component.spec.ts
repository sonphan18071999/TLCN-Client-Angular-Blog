import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullentinBoardDetailPostComponent } from './bullentin-board-detail-post.component';

describe('BullentinBoardDetailPostComponent', () => {
  let component: BullentinBoardDetailPostComponent;
  let fixture: ComponentFixture<BullentinBoardDetailPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullentinBoardDetailPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullentinBoardDetailPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
