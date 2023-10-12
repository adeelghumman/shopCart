import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { getAllProducts } from '../../store/productDetails/productDetails.actions';
import { ProductDetailsSelector } from '../../store/productDetails/productDetails.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent  implements OnInit {
  @Select(ProductDetailsSelector.productDetails) productDetails!: Observable<any>;

  constructor(
    private _store : Store
  ) { }

  ngOnInit() {
    this._store.dispatch(new getAllProducts());
    this.productDetails.subscribe(c=>{
      console.log(c)
    })
  }

}
