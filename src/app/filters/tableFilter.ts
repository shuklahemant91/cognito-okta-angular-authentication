import { Pipe, PipeTransform } from "@angular/core";
import RowHeaders from "../interfaces/RowHeaders";
@Pipe({
  name: "tableFilter",
  pure: false,
})
export class TableFilterPipe implements PipeTransform {
  transform(items: RowHeaders[]): any {
    if (!items) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => item.active);
  }
}
