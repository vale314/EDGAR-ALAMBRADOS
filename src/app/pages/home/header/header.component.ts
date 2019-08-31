import { PipeTransform, Pipe, Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  video= `${environment.url}/video`

  constructor() { }

  ngOnInit() {
  }

}
