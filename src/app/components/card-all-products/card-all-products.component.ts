import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-card-all-products',
  templateUrl: './card-all-products.component.html',
  styleUrls: ['./card-all-products.component.css']
})
export class CardAllProductsComponent implements OnInit {

  constructor(private scrollService:ScrollService) { }

  ngOnInit() {
  }

}
