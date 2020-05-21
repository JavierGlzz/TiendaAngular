import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  noShow = true;
  constructor() { }

  ngOnInit(): void {
  }
  showModal () {
    this.noShow = false;
  }
  closeModal (){
    this.noShow = true;
  }
}
