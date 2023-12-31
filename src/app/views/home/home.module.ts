import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeSliderModule } from 'src/app/shared/components/home-slider/home-slider.module';
import { ProductListingModule } from 'src/app/shared/components/product-listing/product-listing.module';
import { AddNewProductModule } from 'src/app/shared/components/add-new-product/add-new-product.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeSliderModule,
    ProductListingModule,
    AddNewProductModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
