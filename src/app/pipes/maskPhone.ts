import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhone',
  standalone: true,
  pure: false
})
export class maskPhone implements PipeTransform {

  transform(phone: string): string {
    console.log("Pipe running..", phone);
    return phone
      ? phone.slice(0, 2) + '******' + phone.slice(-2)
      : '';
  }
}
