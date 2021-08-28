import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexTricksComponent } from './index-tricks.component';

describe('IndexTricksComponent', () => {
  let component: IndexTricksComponent;
  let fixture: ComponentFixture<IndexTricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexTricksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexTricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
