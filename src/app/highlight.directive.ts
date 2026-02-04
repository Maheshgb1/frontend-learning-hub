import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  enter() {
    this.el.nativeElement.style.background = '#f5f5f5';
  }

  @HostListener('mouseleave')
  leave() {
    this.el.nativeElement.style.background = '';
  }

}
