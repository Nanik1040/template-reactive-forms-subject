import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureDate',
  pure: true, // Set to true for pure pipe
})
export class PureDatePipe implements PipeTransform {
  transform(date: Date): string {
    console.log('Pure Pipe Transformed');
    return date.toLocaleTimeString();
  }
}
