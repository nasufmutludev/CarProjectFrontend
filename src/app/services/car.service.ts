import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Car } from "../models/car";
import { Color } from "../models/color";
import { ListResponseModel } from "../models/listResponseModel";

@Injectable({
  providedIn: "root",
})
export class CarService {
  
  apiUrl = "https://localhost:44329/api/";
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "car/getcardetail";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByCategory(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"car/getbrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getColorByCategory(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"car/getcolorid?colorid="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
}
