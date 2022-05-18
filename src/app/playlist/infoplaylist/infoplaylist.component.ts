import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-infoplaylist',
  templateUrl: './infoplaylist.component.html',
  styleUrls: ['./infoplaylist.component.css']
})
export class InfoplaylistComponent {
  
  title = 'appBootstrap';
  
  closeResult: string = '';
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private modalService: NgbModal, private route:Router) {}
    
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

  playTrack() : void{
    this.route.navigate(['karaoke'])
  }

  canciones2 = [    {
    'nombre':'Bohemian Rhapsody',
    'artista':'Queen',
    'album':'A Night at the Opera'
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
    },
    /*
    {
      'nombre':'Imagination',
      'artista':'Foster the People',
      'album':'Imagination'
    },
    */
  ]

}
