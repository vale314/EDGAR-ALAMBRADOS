import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-malla-ciclonica',
  templateUrl: './malla-ciclonica.component.html',
  styleUrls: ['./malla-ciclonica.component.css']
})
export class MallaCiclonicaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0); 
  }

}
