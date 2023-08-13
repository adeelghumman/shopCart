import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSliderComponent } from './home-slider.component';



@NgModule({
  declarations: [HomeSliderComponent],
  exports: [HomeSliderComponent],
  imports: [
    CommonModule
  ]
})
export class HomeSliderModule { }
