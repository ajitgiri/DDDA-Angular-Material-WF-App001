import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-popupmodel03',
  templateUrl: './popupmodel03.component.html',
  styleUrls: ['./popupmodel03.component.css']
})
export class Popupmodel03Component implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
  

  ngOnInit(): void {
  }

}
