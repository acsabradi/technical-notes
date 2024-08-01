import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  standalone: true,
  pure: true
})
export class JoinPipe implements PipeTransform {

  transform(value: any[], separator: string, ...args: unknown[]): unknown {
    let result : string = '';

    for(let i = 0; i < value.length - 1; i++)
      result += `${value[i]}${separator} `;

    result += value[value.length - 1];
    return result;
  }


}
