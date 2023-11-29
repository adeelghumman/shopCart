import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddNewProductComponent } from 'src/app/shared/components/add-new-product/add-new-product.component';
import { deleteProduct, getAllProducts, getProductById } from 'src/app/shared/store/productDetails/productDetails.actions';
import { ProductDetailsSelector } from 'src/app/shared/store/productDetails/productDetails.selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  @Select(ProductDetailsSelector.productDetails) productDetail!: Observable<any>

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _store: Store,
    private _modal: ModalController,
    private alert: AlertController,
  ) { }


  userId: string = '';
  ngOnInit() {
    this._route.params.subscribe(params => {
      this.userId = params['id'];
      this._store.dispatch(new getProductById(this.userId))
    });
  }

  // Delete product
  async deleteProduct() {
    const alert = await this.alert.create({
      header: 'Confirm Removal',
      subHeader: 'Are You Sure?',
      message: 'Do you really want to remove this product? This action cannot be undone',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this._store.dispatch(new deleteProduct(this.userId));
          }
        }
      ]
    });
    await alert.present();
  }


  //Edit product
  async editProduct() {
  const m = await this._modal.create({
    component: AddNewProductComponent,
    animated: true,
    backdropDismiss: true,
    cssClass: 'addNewProductDetails',
    componentProps: {
      userId: this.userId,
      isUpdateForm: true
    }
  });
  await m.present();
  m.onDidDismiss().then((Role) => {
    if (Role.role === 'save') {

    }
  })
}

// Navigate back to home page
navigateToHome(){
  this._router.navigate(['home']);
}

}
