import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @Input('ifWidth') public ifWidth: number;
  @Input('ifHeight') public ifHeight: number;
  @Input('stepWidth') public stepWidth: number;
  @Input('stepHeight') public stepHeight: number;

  constructor() { }

  ngOnInit(): void {
  }

}
