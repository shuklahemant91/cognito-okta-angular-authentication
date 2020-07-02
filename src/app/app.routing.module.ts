import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { TabsComponent } from "./components/tabs/tabs.component";
import { LoginComponent } from "./components/login/login.component";
import { UploadComponent } from "./components/upload/upload.component";

const routes: Routes = [
  { path: "dashboard", component: TabsComponent },
  { path: "login", component: LoginComponent },
  { path: "upload", component: UploadComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
