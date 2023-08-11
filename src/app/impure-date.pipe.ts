import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureDate',
  pure: false, // Set to false for impure pipe
})
export class ImpureDatePipe implements PipeTransform {
  transform(date: Date): string {
    console.log('Impure Pipe Transformed');
    return date.toLocaleTimeString();
  }
}
