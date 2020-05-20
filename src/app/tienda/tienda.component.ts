import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  datosJson = [];
  
  constructor(public json: ApiService) {
    this.json.getData('http://demo6292426.mockable.io/products').subscribe((res: any) => {
      console.log(res);
      this.datosJson = res;
    })
    
  }

  ngOnInit(): void {
    console.log("kjjbefjbefj");
    
  }

}
