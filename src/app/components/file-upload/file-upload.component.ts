import { Component, ViewChild, viewChild } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { TableComponent } from '../table/table.component';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
};

interface TableCategory {
  name: string,
  label: string
}

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [ FileUploadModule, ToastModule, CommonModule, CheckboxModule, TableComponent],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
  providers: [MessageService]
})
export class FileUploadComponent {
  @ViewChild('uploadedFile') uploadedFile!: any;
  @ViewChild('csvUploader') csvUploader!: any;
  fileContent: any = '';
  tableTitles: any = [];
  columnCategories: Array<TableCategory> = [];

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService){};


  onUpload(event: any){
    console.log('--- even target file --- ', event.currentFiles[0])
    this.fileContent = event.currentFiles[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result)
      console.log('file reader: ', fileReader.readAsText(this.fileContent))
      let arrayResult = fileReader.result?.toString().split('\n');
      console.log('--- array result ---', arrayResult)

    };
    // for(let file of event.files){
    //   this.uploadedFiles.push(file);
    // };
    // this.messageService.add({
    //   severity: 'info',
    //   summary: 'File Uploaded',
    //   detail: ''
    // });
  };

  seeContent(event: any) {
    let fileReader = new FileReader();
    this.fileContent = event.target.files[0];

      fileReader.onload = () => {
      this.fileContent = fileReader.result;
      console.log('file reader result: ', this.fileContent);
      let csvRows = (this.fileContent as string).split('\r\n');
      this.tableTitles = csvRows[0].split(',');
      console.log('csv rows: ', csvRows)
      console.log('header: ', this.tableTitles)
       this.createColumnCategories(this.tableTitles);
    };
    console.log('column categories: ', this.columnCategories)
    console.log('read as a text: ', fileReader.readAsText(this.fileContent))
  };

  showContent(){
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log('file reader: ', fileReader.readAsArrayBuffer(this.fileContent))
    };
  };

  createColumnCategories(arg: any): any {
    (arg as Array<any>).forEach((title: string) => {
      let category: TableCategory = {name: '', label: ''};
      category.name = title;
      category.label = title;
      this.columnCategories.push(category);
    });
  };



}
