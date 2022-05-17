import { Component } from '@angular/core';

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.css']
})
export class ModalidadComponent   {

  constructor() { }

  array : any = [];

  onKeyUp(value : any) {
    
    for (let i = 0; i < value; i++) {
      console.log(i);
      this.array.push(i)
    }
  }

}
