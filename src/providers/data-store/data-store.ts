import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStoreProvider {
  grandTotal: number =0;
  getData: any;
  constructor(public http: HttpClient) {
    console.log('Hello DataStoreProvider Provider');
  }
  setTotal(value){
    this.grandTotal += value;
    
  }
  setData(val) {
    this.getData = val;
  }
 
}
