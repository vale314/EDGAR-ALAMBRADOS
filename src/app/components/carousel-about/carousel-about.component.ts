import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-carousel-about',
  templateUrl: './carousel-about.component.html',
  styleUrls: ['./carousel-about.component.css']
})
export class CarouselAboutComponent implements OnInit {

  constructor(private scrollService:ScrollService) { }

  ngOnInit() {
  }

}
