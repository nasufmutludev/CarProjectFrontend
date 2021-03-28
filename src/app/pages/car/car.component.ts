import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
  brands:Brand[]=[];
  colors:Color[]=[];
  currentColor:Color;
  currentBrand: Brand;
  dataLoad = false;

  constructor(    
    private activatedRoute:ActivatedRoute,
    private carService: CarService,
    private brandService:BrandService,
    private colorService:ColorService   
  ) {}

  ngOnInit():void {
    this.activatedRoute.params.subscribe(params=>{  
      if (params["brandId"]) {
        this.getCarsByCategory(params["brandId"]);         
        this.getBrands();       
        this.getColors();
      }else if(params["colorId"]){
        this.getColorByCategory(params["colorId"]);
        this.getColors();
        this.getBrands();   
      } else{
        this.getColors();
        this.getBrands();   
        this.getCars();     
      }
    })    
  }
  getCarsByCategory(brandId: number) {
    this.carService.getCarsByCategory(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoad=true;
    })
  }

  getColorByCategory(colorId: number) {
    this.carService.getColorByCategory(colorId).subscribe(response=>{
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

  setCurrentColor(color:Color) {        
    this.currentColor=color;
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
