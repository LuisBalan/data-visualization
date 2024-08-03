import { Component, Input, AfterViewInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkboxes-list',
  standalone: true,
  imports: [ CheckboxModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './checkboxes-list.component.html',
  styleUrl: './checkboxes-list.component.scss'
})
export class CheckboxesListComponent {

  @Input() options!: any;
  checkBoxesForm!: FormGroup;
  checked = true;
  selectValue = document.getElementById("select");

  
  selectedOptions: any[] = [];
  constructor( private fb: FormBuilder) {
    // this.checkboxGroup = this.fb.array()
    // this.checkBoxesForm = this.fb.group({
    //   chekcboxes: this.fb.array([])
    // });
    // this.options = [{ value: 1, label: '1', checked: true}, { value: 2, label: '2', checked: false}, {value: 3, label: '3', checked: true}];
  }
  
  ngOnInit() {
    // this.selectedOptions = this.options;
    this.checkBoxesForm = this.fb.group({
      checkBoxes: this.fb.array([]),
    });
    this.addCheckBoxes();
  };
  
  ngOnChanges(){
    console.log('selected options: ', this.selectedOptions)
  };

  get checkBoxes() {return this.checkBoxesForm.get('checkBoxes') as FormArray};

  private addCheckBoxes() {
    // this.options.map((item: any, index: number) => {
    //   // const control = new FormControl( index === 0);
    //   // (this.checkBoxesForm.controls['checkBoxes'] as FormArray).push(new FormControl(true));
    // });
    this.options.forEach(() => this.checkBoxes.push(new FormControl()))
  };

  selectCheckbox(event: any){console.log(event.checked);
    console.log('-- select -- ', this.selectValue)
  };

}
