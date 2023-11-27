import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { getAllProducts } from 'src/app/shared/store/productDetails/productDetails.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private _store: Store,
  ) {}

  ngOnInit() {
    this._store.dispatch(new getAllProducts());
  }

}
