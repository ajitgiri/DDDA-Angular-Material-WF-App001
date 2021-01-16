import { Component, OnInit } from '@angular/core';
import { MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-maticons',
  templateUrl: './maticons.component.html',
  styleUrls: ['./maticons.component.css']
})
export class MaticonsComponent implements OnInit {

  constructor(iconRegistry : MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'medical-mask-o1',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/img/svg-icons/medical-mask-01.svg'));
  }

  ngOnInit(): void {
  }

}
