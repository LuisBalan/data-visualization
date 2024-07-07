import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
    headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }),
};

@Injectable({
    providedIn: 'root'
  })
export class ChartService {
    private baseUrl!: any;
    private proxyUrl!: any;
    private doughnutJsonUrl = "/assets/mocked-data/doughnut.json";

    constructor(private http: HttpClient) {};

    getDoughnutData(): Observable<any> {
        return this.http.get<any>(this.doughnutJsonUrl)
    };
};