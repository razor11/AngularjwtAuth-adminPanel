import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class ProdutcFilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            // tslint:disable-next-line: max-line-length
            return it.name.toLowerCase().includes(searchText) || it.store.toLowerCase().includes(searchText) || it.price.toLowerCase().includes(searchText);
        });
    }
}