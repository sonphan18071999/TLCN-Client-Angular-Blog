import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCircleGraphChartJsComponent } from './admin-circle-graph-chart-js.component';

describe('AdminCircleGraphChartJsComponent', () => {
  let component: AdminCircleGraphChartJsComponent;
  let fixture: ComponentFixture<AdminCircleGraphChartJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCircleGraphChartJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCircleGraphChartJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
