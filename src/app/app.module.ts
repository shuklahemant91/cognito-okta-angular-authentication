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
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import { UploadComponent } from "./components/upload/upload.component";

/* Configure Amplify resources */
Amplify.configure(awsconfig);

const oauth = {
  // Domain name
  domain: "octa.auth.us-east-2.amazoncognito.com/",

  // Authorized scopes
  scope: [
    "phone",
    "email",
    "profile",
    "openid",
    "aws.cognito.signin.user.admin",
  ],

  // Callback URL
  redirectSignIn: "https://d1z71cxu36weec.cloudfront.net/upload",

  // Sign out URL
  redirectSignOut: "https://d1z71cxu36weec.cloudfront.net/login",

  // 'code' for Authorization code grant,
  // 'token' for Implicit grant
  responseType: "code",

  // optional, for Cognito hosted ui specified options
  options: {
    // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
    AdvancedSecurityDataCollectionFlag: false,
  },
};

Auth.configure({
  oauth: oauth,
});

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
