import { Directive, HostListener } from '@angular/core';
import { NgScrollService } from './ng-scroll.service';

@Directive({
  selector: '[ngScrollDirective]'
})
export class NgScrollDirective {

  scrolled: number;
  scrollTop: number;
  height: number;

  constructor(private indicator: NgScrollService) {
  }
    @HostListener('scroll', ['$event']) private onScroll(event: Event) {
    this.scrollTop = event.srcElement.scrollTop;
    this.height = event.srcElement.scrollHeight - event.srcElement.clientHeight;
    this.scrolled = (this.scrollTop / this.height) * 100;
    this.indicator.show(this.scrolled);
  }


}
