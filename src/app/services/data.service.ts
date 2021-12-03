import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

 // https://freecurrencyapi.net/api/v2/latest?apikey=fdad0470-4ee0-11ec-8582-dd238ca922f3
  constructor(private http: HttpClient) { }


  getData(){
    return this.http.get('https://freecurrencyapi.net/api/v2/latest?apikey=fdad0470-4ee0-11ec-8582-dd238ca922f3&base_currency=USD');
  }
}
