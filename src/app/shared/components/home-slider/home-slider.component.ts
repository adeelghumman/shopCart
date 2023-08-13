import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent  implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {}

  navigateToContact(){
    this._router.navigate(['contact']);
  }
}
