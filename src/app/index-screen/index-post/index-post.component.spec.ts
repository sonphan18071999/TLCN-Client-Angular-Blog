import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPostComponent } from './index-post.component';

describe('IndexPostComponent', () => {
  let component: IndexPostComponent;
  let fixture: ComponentFixture<IndexPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
