import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing.component';



@NgModule({
  declarations: [ProductListingComponent],
  exports: [ProductListingComponent],
  imports: [
    CommonModule
  ]
})
export class ProductListingModule { }
