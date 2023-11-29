import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { getAllProducts } from '../../store/productDetails/productDetails.actions';
import { ProductDetailsSelector } from '../../store/productDetails/productDetails.selectors';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddNewProductComponent } from '../add-new-product/add-new-product.component';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {

  @Input() asAPage : boolean = false;
  @Select(ProductDetailsSelector.productDetails) productDetails!: Observable<any>;

  constructor(
    private _store: Store,
    private _router: Router,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    this._store.dispatch(new getAllProducts());
  }

  /**
   * This method navigates to the detail page of the product.
   * @param {string} id - Product ID
   */
  productDetailPage(id: string): void {
    this._router.navigate([`/product-details/${id}`]);
  }

  async addNewProductDetails () {
    const m = await this._modal.create({
      component: AddNewProductComponent,
      animated: true,
      backdropDismiss: true,
      cssClass: 'addNewProductDetails'
    });
    await m.present();

    m.onDidDismiss().then((Role) => {
      if (Role.role === 'save') {
      }
    })
  }

  //navigate to the specific route
  navigate(url: string){
    this._router.navigate([url]);
  }

}
