import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../models/customer";
import { ListResponseModel } from "../models/listResponseModel";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  apiUrl = "https://localhost:44329/api/";

  constructor(private httpClient: HttpClient) {}

  getCustomers(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "customer/getcustomerdetail";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
