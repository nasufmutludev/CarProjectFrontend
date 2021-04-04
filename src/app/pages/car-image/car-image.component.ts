import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Car } from "src/app/models/car";
import { CarImage } from "src/app/models/carImage";
import { CarImageService } from "src/app/services/car-image.service";
import { CarService } from "src/app/services/car.service";

@Component({
  selector: "app-car-image",
  templateUrl: "./car-image.component.html",
  styleUrls: ["./car-image.component.css"],
})
export class CarImageComponent implements OnInit {
  path="https://localhost:44329/Images/"
  cars: Car;
  carImages: CarImage[];

  constructor(
    private carImegeService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getImageByCarId(params["carId"]);
        this.getCarDetailById(params["carId"]);
      }
    });
  }
  getCarDetailById(carId: number) {
    this.carService.getCarDetailCarId(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getImageByCarId(carId: number) {
    this.carImegeService
      .getImageByCarId(carId)
      .subscribe((response) => (this.carImages = response.data));
  }
  
 }
