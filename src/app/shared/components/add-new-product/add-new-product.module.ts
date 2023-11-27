import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewProductComponent } from './add-new-product.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  declarations: [AddNewProductComponent]
})
export class AddNewProductModule { }
