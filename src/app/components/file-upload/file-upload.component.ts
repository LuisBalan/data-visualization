import { Component, ViewChild, viewChild } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
};

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [ FileUploadModule, ToastModule, CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
  providers: [MessageService]
})
export class FileUploadComponent {
  @ViewChild('uploadedFile') uploadedFile!: any;
  @ViewChild('csvUploader') csvUploader!: any;
  fileContent!: any;
  tableTitles: string[] = [];
 
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
    console.log('event: file', event.file)
    console.log('file: ', this.uploadedFile)
    console.log('csv uploader: ', this.csvUploader)
    console.log('---', this.csvUploader.event)
    console.log('--->', event.target.files[0]);
    this.fileContent = event.target.files[0];
    fileReader.onload = () => {
      console.log(fileReader.result)
      let csvRows = (fileReader.result as string).split('\n');
      // this.tableTitles = csvRows[0];
      console.log('header: ', this.tableTitles)

    };
    console.log('read as a text: ', fileReader.readAsText(this.fileContent))
  };

  showContent(){
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      console.log('file reader: ', fileReader.readAsArrayBuffer(this.fileContent))
    };

  };

}
