import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import HomePageDashboard from "../../app/interfaces/HomePageDashboard";
import TableData from "../interfaces/TableData";
import ExchangeFund from "../interfaces/ExchangeFund";
@Injectable({
  providedIn: "root",
})
export default class DashboardService {
  constructor(private http: HttpClient) {}

  getHomeDashboard(): Observable<HomePageDashboard> {
    return this.http.get<HomePageDashboard>("/api/homeDashboard");
  }

  getClosingData(): Observable<TableData> {
    return this.http.get<TableData>("/api/closingDashBoard");
  }

  getExchangeFundList(): Observable<ExchangeFund[]> {
    return this.http.get<ExchangeFund[]>("/api/fundNameList");
  }
}
