import { Component, OnInit } from "@angular/core";
import TableData from "../../interfaces/TableData";
import DashboardService from "../../services/dashboard-service.service";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  tableData: TableData;
  showClosingform: boolean = false;
  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.service.getClosingData().subscribe((data) => {
      this.tableData = data;
    });
  }

  addNewClosing() {
    this.showClosingform = true;
  }

  removeClosingForm() {
    this.showClosingform = false;
  }
}
