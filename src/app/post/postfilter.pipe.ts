import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postfilter'
})
export class PostfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
