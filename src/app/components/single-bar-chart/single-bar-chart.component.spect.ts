import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBarChartComponent } from './single-bar-chart.component';

describe('BasicChartComponent', () => {
  let component: SingleBarChartComponent;
  let fixture: ComponentFixture<SingleBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
