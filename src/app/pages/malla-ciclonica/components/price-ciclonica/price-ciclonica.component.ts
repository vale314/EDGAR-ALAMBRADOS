import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-price-ciclonica',
  templateUrl: './price-ciclonica.component.html',
  styleUrls: ['./price-ciclonica.component.css']
})
export class PriceCiclonicaComponent implements OnInit {

  constructor(private scrollService:ScrollService) { }

  ngOnInit() {
  }

}
