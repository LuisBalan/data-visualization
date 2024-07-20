import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-checkboxes-list',
  standalone: true,
  imports: [ CheckboxModule, FormsModule],
  templateUrl: './checkboxes-list.component.html',
  styleUrl: './checkboxes-list.component.scss'
})
export class CheckboxesListComponent {

  @Input() options!: any;
  selectedOptions: any[] = [];

  constructor() {}

  ngOnInit() {
    console.log('checkboxes list working!')
  };

  ngOnChanges(){
    console.log('selected options: ', this.selectedOptions)
  }

}
