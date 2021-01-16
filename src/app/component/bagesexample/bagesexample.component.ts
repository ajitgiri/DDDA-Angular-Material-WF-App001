import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bagesexample',
  templateUrl: './bagesexample.component.html',
  styleUrls: ['./bagesexample.component.css']
})
export class BagesexampleComponent implements OnInit {
  notification = 10; // or try with repalcing with 0 and check the batch in UI
  constructor() { }

  ngOnInit(): void {
  }

}
