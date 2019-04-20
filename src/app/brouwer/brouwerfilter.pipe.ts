import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brouwerfilter'
})
export class BrouwerfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
