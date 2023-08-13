import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigateToHomePage(){
    this._router.navigate(['home']);
  }

}
