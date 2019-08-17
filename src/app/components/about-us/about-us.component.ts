import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private scrollService:ScrollService) { }

  ngOnInit() {
  }

}
