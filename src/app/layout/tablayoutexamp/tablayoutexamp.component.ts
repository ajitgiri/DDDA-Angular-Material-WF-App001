import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablayoutexamp',
  templateUrl: './tablayoutexamp.component.html',
  styleUrls: ['./tablayoutexamp.component.css']
})
export class TablayoutexampComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logChange(index){
    console.log(index);
    alert("Index : "+index);
  }
}
