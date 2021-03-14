import { Component, OnInit } from '@angular/core';
import { Rentals } from 'src/app/models/rentals';
import { RentalsService } from 'src/app/services/rentals.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {
  rentals:Rentals[]=[];
  dataLoaded=false;

  constructor(private rentalService:RentalsService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals() {
    this.rentalService.getRentals().subscribe((response)=>{
      this.rentals=response.data;
      this.dataLoaded=true;
    })
  }
}

