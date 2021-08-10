import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullentinBoardCreatePostComponent } from './bullentin-board-create-post.component';

describe('BullentinBoardCreatePostComponent', () => {
  let component: BullentinBoardCreatePostComponent;
  let fixture: ComponentFixture<BullentinBoardCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BullentinBoardCreatePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BullentinBoardCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
