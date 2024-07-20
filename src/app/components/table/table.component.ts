import { Component } from '@angular/core';
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
  rows!: any[];
  cols!: any[];

  constructor( private fileService: FileService ){};

  ngOnInit() {
    console.log('table component is working!');
  //   this.cols = [
  //     { field: 'code', header: 'Code' },
  //     { field: 'name', header: 'Name' },
  //     { field: 'category', header: 'Category' },
  //     { field: 'quantity', header: 'Quantity' }
  // ];

  this.fileService.currentFileContent.subscribe(value => {
    this.cols = value;
  });

  // this.rows = [
  //   {
  //       id: '1000',
  //       code: 'f230fh0g3',
  //       name: 'Bamboo Watch',
  //       description: 'Product Description',
  //       image: 'bamboo-watch.jpg',
  //       price: 65,
  //       category: 'Accessories',
  //       quantity: 24,
  //       inventoryStatus: 'INSTOCK',
  //       rating: 5
  //   },
  //   {
  //       id: '1001',
  //       code: 'nv230fh1g3',
  //       name: 'Leather Wallet',
  //       description: 'Elegant leather wallet for daily use.',
  //       image: 'leather-wallet.jpg',
  //       price: 45,
  //       category: 'Accessories',
  //       quantity: 50,
  //       inventoryStatus: 'INSTOCK',
  //       rating: 4
  //   }];
  };
}
