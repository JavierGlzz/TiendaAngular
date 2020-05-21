import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() name: string;
  @Input() guid: string;
  @Output() 
  comprar = new EventEmitter <string>();
  constructor() { }

  ngOnInit(): void {
  }
  comprarProducto(){
    this.comprar.emit(this.guid)
  }
}
