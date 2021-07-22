import { Pipe, PipeTransform } from '@angular/core';
import { Cat } from '../models/cat';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(cats: Cat[], search: string): any {
        if (!search) {
          return cats; 
        }

       let solution = cats.filter((cat: any) => {
          if ( !cat ) {
            return;
          }
         return cat.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || cat.origin?.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      })

      return solution;
  }
}
