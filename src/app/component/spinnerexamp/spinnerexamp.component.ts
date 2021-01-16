import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinnerexamp',
  templateUrl: './spinnerexamp.component.html',
  styleUrls: ['./spinnerexamp.component.css']
})
export class SpinnerexampComponent implements OnInit {
  showSpinner =false;
  constructor() { }

  ngOnInit(): void {
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    },5000);
  }

}
