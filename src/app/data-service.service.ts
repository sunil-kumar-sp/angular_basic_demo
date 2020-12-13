import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  sharedData:number;

  callback=(data)=>console.log(data)

  setData(value:number){
    this.sharedData=value
    this.callback(value)
  }


  constructor() { }
}
