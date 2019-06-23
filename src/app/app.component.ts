import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usd_to_ngn_rate:number = 360;

  value:number = 2;

  _currency = {"name":"NGN","country":"NIGERIA", "currencyName":"Naira", usdRate:"360"};

  fiatCurrencies = [
		{"name":"NGN","country":"NIGERIA", "currencyName":"Naira", usdRate:"360"},
		{name:"XDC",country:"GHANA", "currencyName":"Cedis", usdRate:"250"}
	]

	selectChange(data){
		
			let currency = this.fiatCurrencies.find((currency) => {
                return currency.name === data;
	        });
		this._currency = currency;
	}

}
