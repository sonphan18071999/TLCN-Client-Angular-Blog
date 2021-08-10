import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPostContentComponent } from './pop-up-post-content.component';

describe('PopUpPostContentComponent', () => {
  let component: PopUpPostContentComponent;
  let fixture: ComponentFixture<PopUpPostContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpPostContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
