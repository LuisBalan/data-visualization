import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
export interface Product {
  label: string,
  value: string,
  id: number
};

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [ DragDropModule, CommonModule],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.scss'
})

export class DragAndDropComponent implements OnInit {

  availableProducts!: Product[] | undefined;
  selectedProducts!: Product[] | undefined;
  draggedProduct!: Product | undefined | null ;

  constructor(){

  };

  ngOnInit() {
    this.availableProducts = [
      { label: 'Ingresos', value: 'ingresos', id: 0},
      { label: 'Egresos', value: 'egresos', id: 1},

    ];
    this.selectedProducts = [];
  };

  dragStart(product: Product){
    console.log('drag start event: ', event);
    this.draggedProduct = product;
  };

  drop() {
    console.log('on drop');
    if (this.draggedProduct ) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
      this.availableProducts = this.availableProducts?.filter((value: Product, i: number) =>
        i != draggedProductIndex);
      this.draggedProduct = null;
    };
  };

  dragEnd() {
    console.log('drag end event: ');
    this.draggedProduct = null;
  };

  findIndex(product: Product) {
    let index = -1;
    for ( let i = 0; i < (this.availableProducts as Product[]).length; i++){
      if (product.id === (this.availableProducts as Product[])[i].id){
        index = i;
        break;
      };
    };
    return index;
  };
}
