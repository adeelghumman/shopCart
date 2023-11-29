import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllProductsPageRoutingModule } from './all-products-routing.module';

import { AllProductsPage } from './all-products.page';
import { ProductListingModule } from 'src/app/shared/components/product-listing/product-listing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllProductsPageRoutingModule,
    ProductListingModule
  ],
  declarations: [AllProductsPage]
})
export class AllProductsPageModule {}
