import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fiatConvert'})

export class FiatConvertPipe implements PipeTransform {

	fiatCurrencies = [
					{"name":"NGN","country":"NIGERIA", "currencyName":"Naira", usdRate:"360"},
					{name:"XDC",country:"GHANA", "currencyName":"Naira", usdRate:"250"}
		]

	transform(value: number, currency: string, Irate?:any): number {
		// let exp = parseFloat(exponent);
		// var altPrice = this.currencyPrize(exponent);
		let rate = Irate ? +Irate : +this.Rate(currency);
		// var price = value / altPrice;
		let result = this.calculateResult(rate,value);
		return result;
	}


	Rate(data:string){
		let _currencyName = this.fiatCurrencies.find((currency) => {
                        return currency.name === data;
	        });
		return _currencyName.usdRate;
	}

	calculateResult(rate:number, amount:number) : number{
			let data = 0;
			 data = amount * rate;
		return data;
	}

	
}
