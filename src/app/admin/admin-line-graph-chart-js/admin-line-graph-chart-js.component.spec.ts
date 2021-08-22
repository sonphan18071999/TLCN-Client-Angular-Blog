import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLineGraphChartJSComponent } from './admin-line-graph-chart-js.component';

describe('AdminLineGraphChartJSComponent', () => {
  let component: AdminLineGraphChartJSComponent;
  let fixture: ComponentFixture<AdminLineGraphChartJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLineGraphChartJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLineGraphChartJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
