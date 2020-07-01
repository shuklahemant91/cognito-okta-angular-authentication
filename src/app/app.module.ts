import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { MainInfoComponent } from "./components/main-info/main-info.component";
import { HomeComponent } from "./components/home/home.component";
import { ScanComponent } from "./components/scan/scan.component";
import { AdminComponent } from "./components/admin/admin.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { TableFilterPipe } from "./filters/tableFilter";
import { ItemFilterPipe } from "./filters/itemFilter";
import { ClosingFormComponent } from "./components/closing-form/closing-form.component";
import { DemoComponentComponent } from "./components/demo-component/demo-component.component";
import { DynamicDirective } from "./directives/dynamic.directive";
import { LazyComponentComponent } from "./components/lazy-component/lazy-component.component";
import { AppRoutingModule } from "./app.routing.module";
import { LoginComponent } from "./components/login/login.component";

/* Add Amplify imports */
import { AmplifyUIAngularModule } from "@aws-amplify/ui-angular";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";

/* Configure Amplify resources */
Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    MainInfoComponent,
    HomeComponent,
    ScanComponent,
    AdminComponent,
    DataTableComponent,
    TableFilterPipe,
    ItemFilterPipe,
    ClosingFormComponent,
    DemoComponentComponent,
    DynamicDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DataTableComponent],
})
export class AppModule {}
