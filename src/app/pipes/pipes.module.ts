import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoConvertPipe } from './crypto-convert.pipe';
import { FiatConvertPipe } from './fiat-convert.pipe';

@NgModule({
  declarations: [CryptoConvertPipe, FiatConvertPipe],
  imports: [
    CommonModule
  ],

  exports: [
  	CryptoConvertPipe,
  	FiatConvertPipe
  ]
})
export class PipesModule { }
