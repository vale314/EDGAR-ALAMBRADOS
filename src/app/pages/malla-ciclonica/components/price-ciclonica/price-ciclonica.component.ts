import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-price-ciclonica',
  templateUrl: './price-ciclonica.component.html',
  styleUrls: ['./price-ciclonica.component.css']
})
export class PriceCiclonicaComponent implements OnInit {

  constructor(public scrollService:ScrollService) { }

  ngOnInit() {
  }

}
