import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(items: any, field: any, value: any): any {
    if(!items){
      return [];
    }

    if(!field || !value){
      return items;
    }

    return items.filter(itemList => 
      itemList[field].toLowerCase().includes(value.toLowerCase()));
  }

}
