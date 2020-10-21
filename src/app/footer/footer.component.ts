import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  hoverState:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  mouseEnter() {
    this.hoverState = true;
  }
  mouseLeave() {
    this.hoverState = false;
  }
}
