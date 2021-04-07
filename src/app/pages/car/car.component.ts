import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Brand } from "src/app/models/brand";
import { Car } from "src/app/models/car";
import { Color } from "src/app/models/color";
import { BrandService } from "src/app/services/brand.service";
import { CarService } from "src/app/services/car.service";
import { ColorService } from "src/app/services/color.service";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.scss"],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];  
  colors: Color[] = [];  
  currentColor: Color;
  currentBrand: Brand;
  dataLoad = false;
  filterText="";
  brandFilter:number;
  colorFilter:number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,    
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    

    this.activatedRoute.params.subscribe((params) => {
      if (params["brandId"] && params["colorId"]) {
        this.getCarsByCategory(params["brandId"], params["colorId"]);
      } else if (params["colorId"]) {
        this.getColorByCategory(params["colorId"]);
      } else if(params["brandId"]){
        this.getBrandByCategory(params["brandId"])
      }else {
        this.getCars();
      }
    });
  }

  getBrandByCategory(brandId: number) {
    this.carService.getColorByCategory(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoad = true;
    });
  }

  getCarsByCategory(brandId: number, colorId: number) {
    this.carService
      .getCarsByCategory(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
        this.dataLoad = true;
      });
  }

  getCarDetailByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
       this.cars = response.data;
    });
  }

  getColorByCategory(colorId: number) {
    this.carService.getColorByCategory(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoad = true;
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoad = true;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoad = true;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoad = true;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getAllBrandClass() {
    if (!this.currentBrand) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getSelectedBrand(brandId: number) {
    if (this.brandFilter == brandId)
      return true;
    else
      return false;
  }
  getSelectedColor(colorId: number) {
    if (this.colorFilter == colorId)
      return true;
    else
      return false;
  }  
}
