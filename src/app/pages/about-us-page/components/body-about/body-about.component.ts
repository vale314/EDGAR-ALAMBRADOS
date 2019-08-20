import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-about',
  templateUrl: './body-about.component.html',
  styleUrls: ['./body-about.component.css']
})
export class BodyAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
