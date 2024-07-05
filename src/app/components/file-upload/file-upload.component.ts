import { Component } from '@angular/core';
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

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService){};

  onUpload(event: any){
    for(let file of event.files){
      this.uploadedFiles.push(file);
    };
    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: ''
    });
  };

}
