import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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
