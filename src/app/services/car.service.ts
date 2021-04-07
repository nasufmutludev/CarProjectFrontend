import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Car } from "../models/car";
import { ListResponseModel } from "../models/listResponseModel";
import { ObjectResponseModel } from "../models/objectResponseModel";

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

  getCarsByCategory(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<Car>> {
    let newPath =
      this.apiUrl + "car/getbrandid?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getColorByCategory(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "car/getcolorid?colorid=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "car/getbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailCarId(carId: number): Observable<ObjectResponseModel<Car>> {
    let newPath = this.apiUrl + "car/getbycarid?carId=" + carId;
    return this.httpClient.get<ObjectResponseModel<Car>>(newPath);
  }

  getCarsBrandAndColorId(): Observable<ListResponseModel<Car>> {
      let newPath = this.apiUrl + "car/getcarsbrandandcolorid"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
