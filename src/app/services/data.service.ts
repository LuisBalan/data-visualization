import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // 'https://coco-rojo-marino.azurewebsites.net/api/data_request?code=holalola'
  private baseURL = 'https://coco-rojo-marino.azurewebsites.net/api'
  
  constructor( private http: HttpClient) { }

  getWorldPopulationByDecade(decade: string): Observable<any>{
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': environment.xRapidApiKey,
      'X-RapidAPI-Host': 'world-population-by-decade-and-growth-rate.p.rapidapi.com',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    const params = new HttpParams().set('decade', decade);
    // return this.http.get<any>(this.baseURL + '/yDRaVL/world_population_by_decade', { headers: headers, params: params});
    return this.http.get<any>('grouped.json')
  }

  getDataFromJSON(): Observable<any> {
    return this.http.get<any>("../../../assets/mocked-data/grouped.json");
  }

  getRawData(code: string): Observable<any> {
    const url = `${this.baseURL}/data_request`;
    const params = new HttpParams().set('code', code);
    return this.http.get<any>(url);
  }


}
