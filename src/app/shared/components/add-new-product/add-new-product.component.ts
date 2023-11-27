import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Select, Selector, Store } from '@ngxs/store';
import { createProduct, getAllProducts } from '../../store/productDetails/productDetails.actions';
import { Product } from '../../store/productDetails/productDetails.models';
import { ProductDetailsSelector } from '../../store/productDetails/productDetails.selectors';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {

  @Select(ProductDetailsSelector.productDetailsLoader) productDetailsLoader$!: Observable<boolean>;

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    inStock: new FormControl(false)
  });

  image: any = '';
  inStock: boolean = false


  constructor(private modalController: ModalController,
    private _store: Store
  ) { }

  ngOnInit() { }

  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader: any = new FileReader();

      // Function to execute once the file is read
      reader.onload = function (e: any) {
      };

      // Read the selected file
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  toggleInStock() {
    this.inStock = !this.inStock;
    this.productForm.controls['inStock'].setValue(this.inStock);

  }

  // on Form submit and do post call for creating new product
  onSubmit() {
    this._store.dispatch(new createProduct(this.mapToDestinationType(this.productForm.value)));
    this.productDetailsLoader$.pipe(val => val, take(1)).subscribe(res => {
      if (res) {
        this.dismissModal();
        this._store.dispatch(new getAllProducts());
      }
    })
  }

  // for dismissing modal
  dismissModal() {
    this.modalController.dismiss()
  }

  // Form gettors
  get name() {
    return this.productForm.get('name');
  }

  mapToDestinationType(source: any): Product {
    return {
      name: source.name,
      description: source.description,
      createdDate: null,
      createdBy: '',
      image: '',
      inStoke: source.inStock,
      price: source.price,
    };
  }

}
