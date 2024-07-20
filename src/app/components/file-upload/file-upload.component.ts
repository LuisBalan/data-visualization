import { Component} from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TableComponent } from '../table/table.component';
import { CheckboxesListComponent } from '../checkboxes-list/checkboxes-list.component';
import { FileService } from '../../services/file.service';

export interface CheckboxOption {
  name: string,
  label: string,
  value: string,
}

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [ FileUploadModule,
    ToastModule,
    CommonModule,
    CheckboxModule,
    TableComponent,
    CheckboxesListComponent
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
  providers: [MessageService]
})
export class FileUploadComponent {

  csvHeaderLabels: any;

  constructor( private fileService: FileService ){};

  ngOnInit(){
    this.fileService.currentTableHeaders.subscribe(value => {
      this.csvHeaderLabels = value;
    });
  }

  onLoadFile(event: any){
    const fileReader = new FileReader();
    const fileContent = event.target.files[0];
    if (fileContent) {
      fileReader.onload = () => {
      const resultantContent = fileReader.result;
      this.fileService.getColumnsNamesFromTable(resultantContent);
      };
      fileReader.readAsText(fileContent);
    }
  };

}
