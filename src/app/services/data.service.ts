import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseURL = 'https://world-population-by-decade-and-growth-rate.p.rapidapi.com'

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
    return this.http.get(this.baseURL + '/yDRaVL/world_population_by_decade', { headers: headers, params: params});
  }


}
