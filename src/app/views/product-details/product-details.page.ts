import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { getProductById } from 'src/app/shared/store/productDetails/productDetails.actions';
import { ProductDetailsSelector } from 'src/app/shared/store/productDetails/productDetails.selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  @Select(ProductDetailsSelector.productDetails) productDetail!: Observable<any>

  constructor(private _route: ActivatedRoute, private _store: Store) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const id = params['id']; // 'id' should match the parameter name defined in your route
      this._store.dispatch(new getProductById(id))
    });

    this.productDetail.subscribe(product=>{
      console.log(product)
    })
  }

}
