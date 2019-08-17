import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scrollToContacto(){
    $("html, body").animate({
      scrollTop: $('.contactus-1').offset().top
    }, 1000);
  }
}
