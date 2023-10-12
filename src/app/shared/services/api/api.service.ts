import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private _http: HttpClient
  ) { }

  get(url: string, params?: any): Observable<any> {

    const headers = {
      'Content-Type': 'application/json'
    };

    return this._http.get(environment.api.baseUrl + url, {
      headers: new HttpHeaders(headers),
      params: params
    })
  }

  post(url: string, body: any): Observable<any> {
    const headers = {
      'Content-Type': 'application/json'
    };
    return this._http.post(environment.api.baseUrl + url, body, { headers: new HttpHeaders(headers), });
  }
 
  patch(url: string, body: any): Observable<any> {
    const headers = {
      'Content-Type': 'application/json'
    };
    return this._http.patch(environment.api.baseUrl + url, body, { headers: new HttpHeaders(headers), });
  }

  put(url: string, body: any): Observable<any> {
    const headers = {
      'Content-Type': 'application/json'
    };
    return this._http.put(environment.api.baseUrl + url, body, { headers: new HttpHeaders(headers), });
  }

  delete(url: string, body?: any): Observable<any> {
    const headers = {
      'Content-Type': 'application/json'
    };
    return this._http.delete(environment.api.baseUrl + url, body);



    // return this._http.delete(environment.api.baseUrl + url);
  }
}
