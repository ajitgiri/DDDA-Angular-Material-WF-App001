import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Popupmodel01Component } from '../popupmodel01/popupmodel01.component';
import { Popupmodel02Component } from '../popupmodel02/popupmodel02.component';
import { Popupmodel03Component } from '../popupmodel03/popupmodel03.component';

@Component({
  selector: 'app-dialogcontentexample',
  templateUrl: './dialogcontentexample.component.html',
  styleUrls: ['./dialogcontentexample.component.css']
})
export class DialogcontentexampleComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(Popupmodel01Component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2() {
    const dialogRef = this.dialog.open(Popupmodel02Component);
  }

  openDialog3() {
    this.dialog.open(Popupmodel03Component, {
        height: '400px',
        width: '600px',
      data: {
        animal: 'panda'
      }
    });
  }

}
