import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ɵrenderComponent as renderComponent,
  Injector,
} from "@angular/core";
import HomePageDashboard from "../../interfaces/HomePageDashboard";
import Tabledata from "../../interfaces/TableData";
import DashboardService from "../../services/dashboard-service.service";
import { DataTableComponent } from "../data-table/data-table.component";
import { DynamicDirective } from "../../directives/dynamic.directive";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  // homePageData: HomePageDashboard;
  // dataTable: Tabledata;
  // items: any[];
  // title: string;
  // isFalty: boolean = false;
  // private _st: string;
  // isFromViewChild: boolean;
  // @ViewChild(DataTableComponent, { static: true }) viewChild;
  // @ViewChild(DynamicDirective, { static: true }) viewChildDir;
  // constructor(
  //   private service: DashboardService,
  //   private cd: ChangeDetectorRef,
  //   private componentFactoryResolver: ComponentFactoryResolver
  // ) {
  //   this.items = [];
  //   this._st = "PrivateStringsss";
  //   console.log(this.viewChildDir);
  // }
  // ngAfterViewInit() {
  //   console.log("called only once", this.viewChildDir);
  //   this.isFromViewChild = this.viewChild.isAscend;
  // }
  // ngOnInit() {
  //   console.log("ng-init");
  //   this.service.getHomeDashboard().subscribe((data) => {
  //     this.homePageData = data;
  //     this.dataTable = {
  //       data: this.homePageData.data,
  //       dataHeaders: this.homePageData.dataHeaders,
  //     };
  //   });
  //   setTimeout(() => {
  //     const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
  //       DataTableComponent
  //     );
  //     const viewContainerRef = this.viewChildDir.viewContainer;
  //     viewContainerRef.clear();
  //     const componentRef = viewContainerRef.createComponent(componentFactory);
  //     (<DataTableComponent>componentRef.instance).rowData = this.dataTable;
  //   }, 4000);
  // }
  // loadComp() {
  //   import("../lazy-component/lazy-component.component").then(
  //     ({ LazyComponentComponent }) => {
  //       renderComponent(LazyComponentComponent, { host: "my-container" });
  //     }
  //   );
  // }
  // ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
  //   console.log("home changes ngonchange", changes);
  // }
  // addItem() {
  //   this.items = [...this.items, { name: this.title, isFalty: this.isFalty }];
  //   //this.items.push({ name: this.title, isFalty: this.isFalty });
  // }
}
