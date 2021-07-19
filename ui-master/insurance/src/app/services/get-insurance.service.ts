import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInsuranceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  InsuranceURL: string = environment.BaseURL;

  constructor(private httpClient: HttpClient) { }

  getInsuranceDetails(): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(this.InsuranceURL+'premium', this.httpOptions);
  }

}
