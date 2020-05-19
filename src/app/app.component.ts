import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaAngular';

  constructor(public json: ApiService) {
    this.json.getData('http://demo6292426.mockable.io/products').subscribe((res: any) => {
      console.log(res);
    })
    
  }
}
