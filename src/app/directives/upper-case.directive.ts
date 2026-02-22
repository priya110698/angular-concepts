import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  standalone: true
})
export class UppercaseDirective {
  @HostBinding('style.text-transform') textTransform = 'uppercase';

  constructor(private readonly el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event.target.value'])
  onInputChange(value: string): void {
    this.el.nativeElement.value = value.toUpperCase();
  }
}
