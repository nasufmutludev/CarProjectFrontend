import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Brand } from "src/app/models/brand";
import { Car } from "src/app/models/car";
import { BrandService } from "src/app/services/brand.service";
import { CarService } from "src/app/services/car.service";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.scss"],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  brands:Brand[]=[];
  currentBrand: Brand;
  dataLoad = false;

  constructor(    
    private activatedRoute:ActivatedRoute,
    private carService: CarService,
    private brandService:BrandService     
  ) {}

  ngOnInit():void {
    this.activatedRoute.params.subscribe(params=>{  
      if (params["brandId"]) {
        this.getCarsByCategory(params["brandId"]);
        this.getBrands();
      }else{
        this.getCars();
        this.getBrands();
      }
    })    
  }
  getCarsByCategory(brandId: number) {
    this.carService.getCarsByCategory(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoad=true;
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
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
}
