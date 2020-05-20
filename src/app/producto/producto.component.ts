import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() name: string;
  @Input() guid: string;
  constructor() { }

  ngOnInit(): void {
  }

}