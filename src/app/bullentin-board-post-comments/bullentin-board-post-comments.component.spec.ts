import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullentinBoardPostCommentsComponent } from './bullentin-board-post-comments.component';

describe('BullentinBoardPostCommentsComponent', () => {
  let component: BullentinBoardPostCommentsComponent;
  let fixture: ComponentFixture<BullentinBoardPostCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullentinBoardPostCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullentinBoardPostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
