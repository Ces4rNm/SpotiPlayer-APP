import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  ideT:number = -1;
  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  hoverState:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  mouseEnter(ide) {
    this.hoverState = true;
    this.ideT = ide;
    console.log(ide);
  }
  mouseLeave() {
    this.hoverState = false;
    this.ideT = -1;
  }

}
