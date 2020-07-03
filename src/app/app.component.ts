import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Demo";

  onLoginOktaClick(event) {
    event.preventDefault();
    const url =
      "https://octa.auth.us-east-2.amazoncognito.com/login?response_type=code&client_id=1nakqpl7qmdmppvis5bp1ej4p0&redirect_uri=https://d1z71cxu36weec.cloudfront.net/upload";
    window.location.assign(url);
  }
}
