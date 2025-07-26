import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: true,
  // pure: false
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    console.log("Pipe running..", value);
    if (!value) return '';

    return value
      .toString()
      .toLowerCase()
      .split(' ')
      .map((word, index) => {
        if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('  ');
  }
}
