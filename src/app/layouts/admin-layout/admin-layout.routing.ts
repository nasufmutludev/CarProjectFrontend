import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { CarComponent } from "../../pages/car/car.component";
import { BrandComponent } from "src/app/pages/brand/brand.component";
import { ColorComponent } from "src/app/pages/color/color.component";
import { CustomerComponent } from "src/app/pages/customer/customer.component";
import { RentalsComponent } from "src/app/pages/rentals/rentals.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "car", component: CarComponent },
  { path: "brand", component: BrandComponent },
  { path: "color", component: ColorComponent },
  { path: "customer", component: CustomerComponent },
  { path: "rentals", component: RentalsComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapsComponent },
];
