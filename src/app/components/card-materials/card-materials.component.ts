import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-card-materials',
  templateUrl: './card-materials.component.html',
  styleUrls: ['./card-materials.component.css']
})
export class CardMaterialsComponent implements OnInit {

  constructor(public scrollService:ScrollService) { }

  ngOnInit() {
  }

}
