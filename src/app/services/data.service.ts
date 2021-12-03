import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ExchangeResponse } from '../interfaces/exchange-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // https://freecurrencyapi.net/api/v2/latest?apikey=fdad0470-4ee0-11ec-8582-dd238ca922f3
  constructor(private http: HttpClient) {
  }


  getData(baseCurrency: string): Promise<ExchangeResponse> {
    return this.http.get<ExchangeResponse>(`https://freecurrencyapi.net/api/v2/latest?apikey=${environment.apiKey}&base_currency=${baseCurrency}`).toPromise();
  }
}
