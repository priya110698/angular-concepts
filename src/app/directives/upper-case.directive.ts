import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUppercase]', // The directive will be used as an attribute
  standalone: true
})
export class UppercaseDirective {

  constructor(private el: ElementRef) {}

  // Listen to the 'input' event on the element
  @HostListener('input', ['$event']) onInputChange(event: any) {
    const input = event.target.value;
    this.el.nativeElement.value = input.toUpperCase();
  }
}
