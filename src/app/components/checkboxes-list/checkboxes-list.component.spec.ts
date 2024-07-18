import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesListComponent } from './checkboxes-list.component';

describe('CheckboxesListComponent', () => {
  let component: CheckboxesListComponent;
  let fixture: ComponentFixture<CheckboxesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
