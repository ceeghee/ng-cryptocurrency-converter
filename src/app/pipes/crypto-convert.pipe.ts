import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cryptoConvert'
})
export class CryptoConvertPipe implements PipeTransform {

 /**
 * value : this is the value we wish to convert
 * from : this is the currency we would be converting from
 * to : this is the currency we would be converting to
 */

  transform(value: number, from: string, to: string): number {
   		
   		let price = this.getPrice(value, from, to);
   	 	return price;
  }

  getPrice(value: number, from: string, to: string) : number{
			let data = 0;
			if(from === "btc"){
				if(to === "usd"){

				// 10701.21 is the current btc to usd price as at the creation of this post
					data = value * 10701.21 
				}
			}
		return data;
	}

}
