import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-demo-component",
  templateUrl: "./demo-component.component.html",
  styleUrls: ["./demo-component.component.scss"],
})
export class DemoComponentComponent implements OnInit {
  @Input() uppercase: string;
  @Output() uppercaseChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  setUpperCase($event) {
    console.log($event.target.value);
    this.uppercaseChange.emit($event.target.value.toUpperCase());
  }
}
