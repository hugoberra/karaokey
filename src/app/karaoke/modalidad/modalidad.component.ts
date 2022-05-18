import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalidad',
  templateUrl: './modalidad.component.html',
  styleUrls: ['./modalidad.component.css']
})
export class ModalidadComponent   {

  participantes : any = 1;

  array : any = [];

  crearCola() {

    
    
    for (let i = 0; i < this.participantes; i++) {
      this.array.push(i)
    }


  }
  addparticipante(value : any) :void {
    this.participantes = value;
  }

  title = 'appBootstrap';
  
  closeResult: string = '';
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal) {}
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteTrack(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  addTrack(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  canciones2 = [    {
    'nombre':'Do I Wanna Know?',
    'artista':'Arctic Monkeys',
    'album':'AM'
  }
]  
  canciones = [
    
    {
      'nombre':'Do I Wanna Know?',
      'artista':'Arctic Monkeys',
      'album':'AM'
    },{
      'nombre':'Make a Little Money',
      'artista':'Royal Deluxe',
      'album':'DELUXE'
    },
    {
      'nombre':'The Unforgiven',
      'artista':'Metallica',
      'album':'The Unforgiven'
    },
    {
      'nombre':'Ride',
      'artista':'Twenty One Pilots',
      'album':'Pilots'
    },
    {
      'nombre':'Lonely Boy',
      'artista':'The Black Keys',
      'album':'Underground'
    }
  ]
}
