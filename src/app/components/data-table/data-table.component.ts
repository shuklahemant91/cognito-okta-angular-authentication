import { Component, OnInit, Input, OnChanges } from "@angular/core";
import TableData from "../../interfaces/TableData";
import RowHeader from "../../interfaces/RowHeaders";

import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent implements OnInit, OnChanges {
  headers: RowHeader[];
  isAscend: boolean = false;
  @Input() rowData: TableData;
  @Input() tableHeader: string;
  @Input() items: any[];

  changePropStr: string = "";
  constructor() {}

  ngOnInit() {}

  sortTable(key: string, ev) {
    this.isAscend = !this.isAscend;
    this.rowData.data = this.rowData.data.sort((a, b) => {
      let comparison = 0;
      if (a[key] > b[key]) {
        comparison = 1;
      } else if (a[key] < b[key]) {
        comparison = -1;
      }
      return this.isAscend ? comparison : comparison * -1;
    });

    if (this.isAscend) ev.target.classList.add("asc");
    else ev.target.classList.remove("asc");
  }

  ngOnChanges(changes) {
    for (let i in changes) {
      let propObj = changes[i];
      let to = propObj.currentValue ? propObj.currentValue.length : 0;
      if (propObj.isFirstChange()) {
        this.changePropStr = `Property length of ${i} set to ${to}`;
      } else {
        let from = propObj.previousValue ? propObj.previousValue.length : 0;
        this.changePropStr = `Property length of ${i} changes from ${from} to ${to}`;
      }
    }
  }
}
