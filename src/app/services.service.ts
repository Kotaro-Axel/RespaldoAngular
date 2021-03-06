import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  
  private REST_API_SERVER = 'http://localhost:3000/';

  constructor (private httpclient : HttpClient) { }


  public getOrder(nameEndPoint : String){

  }

  public getProduct(nameEndPoint : String){
    return this.httpclient.get(this.REST_API_SERVER + nameEndPoint);
  }

  public getSale(nameEndPoint : String){

  }

  public getUserAdmin(nameEndPoint : String){

  }

}
