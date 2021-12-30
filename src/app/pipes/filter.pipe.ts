import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args) { return value; }
    let re = new RegExp(args, 'gi');
    return value.replace(re, "<mark>$&</mark>");
  }
}