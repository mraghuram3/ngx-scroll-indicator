import { Component, OnInit, Input } from '@angular/core';

import { NgScrollService } from './ng-scroll.service';

@Component({
  selector: 'ng-scroll-indicator-component',
  template: `
  <style>
  .progress-container {
    width: 100%;
    height: 8px;
    background: #ccc;
  }
  .progress-bar {
    height: 8px;
    background: #4caf50;
    width: 0%;
  }
  </style>
  <div class="progress-container" [ngClass]="customContainer">
  <div class="progress-bar" [ngClass]="customProgressBar" id="myBar" [style.width.%]="progress"></div>
  </div>`
})
export class NgScrollComponent implements OnInit {

  progress: number;
  customContainer = '';
  customProgressBar = '';

  @Input('container')
  set container(container: string){
    this.customContainer = container;
  }

  @Input('progressbar')
  set progressbar(bar: string){
    this.customProgressBar = bar;
  }
  constructor(private indicator: NgScrollService) {
    this.progress = 0;
   }

   ngOnInit() {
    this.indicator.events.subscribe((event: number) => {
    this.progress = event;
    });
  }
}
