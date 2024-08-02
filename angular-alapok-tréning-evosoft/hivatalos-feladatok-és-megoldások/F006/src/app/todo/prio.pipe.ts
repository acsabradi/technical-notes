import { Pipe, PipeTransform } from '@angular/core';
import { Priority } from './todo.model';

@Pipe({
  name: 'prio',
})
export class PrioPipe implements PipeTransform {

  transform(value: Priority, ...args: unknown[]): unknown {
    if(value == Priority.low) return 'alacsony';
    else if(value == Priority.medium) return 'közepes';
    else return 'magas';
  }

}
