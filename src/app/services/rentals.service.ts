import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rentals } from '../models/rentals';

@Injectable({
  providedIn: 'root'
})
export class RentalsService {
  apiUrl="https://localhost:44329/api/";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rentals>>{
    let newPath=this.apiUrl+"rental/getrentaldetail";
    return this.httpClient.get<ListResponseModel<Rentals>>(newPath);
  }
}
