import { Pipe, PipeTransform } from '@angular/core';
import { Sex } from '../Sex';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: Sex, ...args: unknown[]): unknown {
    if(value == Sex.FEMALE) return 'nő';
    else return 'férfi';
  }

}
