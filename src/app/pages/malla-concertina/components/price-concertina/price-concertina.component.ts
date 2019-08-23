import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service';

@Component({
  selector: 'app-price-concertina',
  templateUrl: './price-concertina.component.html',
  styleUrls: ['./price-concertina.component.css']
})
export class PriceConcertinaComponent implements OnInit {

  constructor(public scrollService:ScrollService) { }

  ngOnInit() {
  }

}
