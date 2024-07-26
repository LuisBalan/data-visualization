import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [DropdownModule, CheckboxModule, FormsModule, ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @Input() column!: any;

  formGroup!: FormGroup;
  selectControl!: FormControl
  selectForm!: any;
  // reactiveDropDown!: FormControl
  // reactiveCheckbox!: FormControl;
  checked = true;
  columnForm!: any;

  options: any = [
    {label: 'Número entero', value: 'int'},
    {label: 'Decimal', value: 'float64'},
    {label: 'Fecha', value: 'date'},
    {label: 'Texto', value: 'string'},
  ];

  checkBoxOption: any = {label: 'Columna 1', value: 'col1'}

  selectValue!: any;

  constructor( private fb: FormBuilder){
    this.columnForm = this.fb.group({
      reactiveDropDown: new FormControl('string'),
      reactiveCheckbox: new FormControl(true)
    })
    
  };

  ngOnInit() {
  this.selectControl=new FormControl<any>('')
  this.selectValue = document.getElementById('select')
  this.selectForm = document.getElementById('selectForm')
  this.columnForm.controls['reactiveDropDown'].setValue('');

  this.columnForm.controls['reactiveDropDown'].valueChanges.subscribe((value: any)=> console.log('value changes: ', value))
  this.columnForm.value.valueChanges((value: any) => {console.log('columns Form value: ', value)})
}


selectChange(event: any) {console.log(event)
  console.log('select value: ', this.selectValue.value)
  let selectedValue = event.target.value
  console.log('event: ', selectedValue)
  this.assignValueToSelect(event.target.value);

}

assignValueToSelect(arg: any){
  const valuesOptions = this.options.map((option: any) => option.label);
  const labelOptions = this.options.map((option: any) => option.value)
  console.log('value options: ', valuesOptions)
  let targetOption = valuesOptions.indexOf(arg)
  let selectValue: string = labelOptions[targetOption];
  this.columnForm.controls['reactiveDropDown'].patchValue(selectValue)
}



}