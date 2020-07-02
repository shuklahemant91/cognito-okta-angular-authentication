import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {
  selectedFile: File = null;
  successUpload: boolean = false;
  uploadPercentage: boolean = false;
  uploadPercentageText: string = "";
  errorMessage: string = "";
  errorUpload: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(fileInput) {
    this.errorMessage = "";
    this.successUpload = false;
    this.errorUpload = false;
    if (this.selectedFile.type !== "application/pdf") {
      this.errorUpload = true;
      this.errorMessage = "Please upload a pdf file.";
      return;
    }

    // let headers = new HttpHeaders();
    // headers = headers.set("Content-Type", "application/pdf");
    const formData = new FormData();
    formData.append("file", this.selectedFile, this.selectedFile.name);

    this.http
      .post(
        "https://7eukkkajuk.execute-api.us-east-1.amazonaws.com/dev",
        formData,
        {
          reportProgress: true,
          observe: "events",
          headers: new HttpHeaders({
            "Content-Type": "application/pdf",
          }),
          params: new HttpParams().set("fileName", Math.random().toString(36)),
        }
      )
      .subscribe((events) => {
        this.uploadPercentageText = "";
        this.uploadPercentage = true;
        if (events.type === HttpEventType.UploadProgress) {
          let perc = (events.loaded / events.total) * 100;
          this.uploadPercentageText = `${perc}%`;
        } else if (events.type === HttpEventType.Response) {
          fileInput.value = "";
          this.successUpload = true;
          this.uploadPercentage = false;
        }
      });
  }
}
