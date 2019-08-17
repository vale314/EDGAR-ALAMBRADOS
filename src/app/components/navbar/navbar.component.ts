import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ScrollService } from '../../services/scroll.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private scrollService:ScrollService) { }

  ngOnInit() {
    
  }

}
