import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { TabsComponent } from "./components/tabs/tabs.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app.routing.module";
import { LoginComponent } from "./components/login/login.component";

/* Add Amplify imports */
import { AmplifyUIAngularModule } from "@aws-amplify/ui-angular";
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";
import { UploadComponent } from './components/upload/upload.component';

/* Configure Amplify resources */
Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent, TabsComponent, LoginComponent, UploadComponent],
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
  entryComponents: [],
})
export class AppModule {}
