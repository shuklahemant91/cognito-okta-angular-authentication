import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import Exchangefund from "../../interfaces/ExchangeFund";
import DashboardService from "../../services/dashboard-service.service";
@Component({
  selector: "app-closing-form",
  templateUrl: "./closing-form.component.html",
  styleUrls: ["./closing-form.component.scss"],
})
export class ClosingFormComponent implements OnInit {
  closingForm = new FormGroup({
    closingName: new FormControl(""),
    closingDate: new FormControl(""),
    inspectionReportDate: new FormControl(""),
    exchangeFund: new FormControl(""),
  });

  exchangeFund: Exchangefund[];

  @Output() returnEmitter = new EventEmitter();

  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.service.getExchangeFundList().subscribe((data) => {
      this.exchangeFund = data;
    });
  }

  onSubmit() {
    console.warn(this.closingForm.value);
  }
  returnCloseListing() {
    this.returnEmitter.emit();
  }
}
