import { Component, OnInit, Input } from "@angular/core";
import CurrentClosing from "../../interfaces/CurrentClosing";
@Component({
  selector: "app-main-info",
  templateUrl: "./main-info.component.html",
  styleUrls: ["./main-info.component.scss"],
})
export class MainInfoComponent implements OnInit {
  @Input() currentClosing: CurrentClosing;
  @Input() pendingSubscriptions: number;
  @Input() completeSubscriptions: number;
  constructor() {}

  ngOnInit() {}
}
