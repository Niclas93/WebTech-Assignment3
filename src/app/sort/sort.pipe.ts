import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy'})
export class MyOrderByPipe implements PipeTransform {
  transform(entry: any[], field: string, reverse: boolean = false): any[] {
    if (!entry) return [];

    if (field) entry.sort((a, b) => a[field] > b[field] ? 1 : -1);
    else entry.sort((a, b) => a > b ? 1 : -1);

    if (reverse) entry.reverse();

    return entry;
  }
}
