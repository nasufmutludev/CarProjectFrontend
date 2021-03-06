import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { CarComponent } from '../../pages/car/car.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrandComponent } from 'src/app/pages/brand/brand.component';
import { ColorComponent } from 'src/app/pages/color/color.component';
import { CustomerComponent } from 'src/app/pages/customer/customer.component';
import { RentalsComponent } from 'src/app/pages/rentals/rentals.component';
import { CarImageComponent } from 'src/app/pages/car-image/car-image.component';
import { VatAddedPipe } from 'src/app/pipes/vat-added.pipe';
import { FilterPipePipe } from 'src/app/pipes/filter-pipe.pipe';
import { BrandFilterPipePipe } from 'src/app/pipes/brand-filter-pipe.pipe';
import { ColorPipePipe } from 'src/app/pipes/color-pipe.pipe';
import { FilterComponent } from 'src/app/pages/filter/filter.component';


// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,       
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CarComponent,
    BrandComponent,   
    ColorComponent,
    CarImageComponent,
    RentalsComponent,
    CustomerComponent, 
    IconsComponent,
    VatAddedPipe,
    FilterPipePipe,
    BrandFilterPipePipe,
    ColorPipePipe,    
    MapsComponent,
    FilterComponent
  ]
})

export class AdminLayoutModule {}
