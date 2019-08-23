import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-price-seguridad',
  templateUrl: './price-seguridad.component.html',
  styleUrls: ['./price-seguridad.component.css']
})
export class PriceSeguridadComponent implements OnInit {

  constructor(public scrollService:ScrollService) { }

  ngOnInit() {
  }

}
