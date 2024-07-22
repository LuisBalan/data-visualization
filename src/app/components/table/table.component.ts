import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FileService } from '../../services/file.service';

export interface Col {
  field: string,
  header: string
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ TableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
  @Input() rows!: any[];
  @Input () cols!: any[];

  constructor( private fileService: FileService ){};

  ngOnInit() {
    console.log('table component is working!');
  };
}
