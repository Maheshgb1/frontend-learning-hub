import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  @HostListener('input', ['$event'])
  onInput(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }
}

