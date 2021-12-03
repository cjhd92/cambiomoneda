import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ExchangeResponse } from 'src/app/interfaces/exchange-response.interface';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css']
})
export class CambioComponent implements OnInit {
  fromCurrency: string = 'EUR';
  toCurrency: string = 'USD';

  fromAmount: number = 1;
  toAmount: number = 1;

  exchangeData: ExchangeResponse;

  baseValueExchange: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.onChangeFromCurrency();
  }

  setBaseValueExchange(): void {
    this.baseValueExchange = this.exchangeData.data[this.toCurrency];
  }

  calculateExchange(): void {
    this.toAmount = this.fromAmount * this.exchangeData.data[this.toCurrency];
  }


  async onChangeFromCurrency(): Promise<void> {
    await this.getExchangeData();
    this.setBaseValueExchange();
    this.calculateExchange();
  }

 async onChangeToCurrency(): Promise<void> {
   await this.calculateExchange();
  }

  async swapCurrency(): Promise<void> {
    const fromCurrencyTemp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = fromCurrencyTemp;
    await this.getExchangeData();
    this.setBaseValueExchange();
    this.calculateExchange();
  }

  async getExchangeData(): Promise<void> {
    this.exchangeData = await this.dataService.getData(this.fromCurrency);
    
  }
}
