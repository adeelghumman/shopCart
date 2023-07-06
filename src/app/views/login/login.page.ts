import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this._router.navigate(['/home']);
  }

}
