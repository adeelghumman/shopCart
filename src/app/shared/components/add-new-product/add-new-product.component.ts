import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Select, Selector, Store } from '@ngxs/store';
import { createProduct, getAllProducts, getProductById, updateProduct } from '../../store/productDetails/productDetails.actions';
import { Product } from '../../store/productDetails/productDetails.models';
import { ProductDetailsSelector } from '../../store/productDetails/productDetails.selectors';
import { Observable, skipWhile, take } from 'rxjs';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {

  @Select(ProductDetailsSelector.productDetailsLoader) productDetailsLoader$!: Observable<boolean>;
  @Select(ProductDetailsSelector.productDetails) productDetails$!: Observable<boolean>;

  @Input() userId: string = '';
  @Input() isUpdateForm: boolean = false;

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl(''),
    inStock: new FormControl(false)
  });

  image: any = '';
  inStock: boolean = false


  constructor(private modalController: ModalController,
    private _store: Store
  ) { }

  ngOnInit() {
    if (this.userId) {
      this.productDetails$.pipe(skipWhile(val => !val), take(1)).subscribe((product: any) => {
        this.initializeForm(product.data[0]);
      })
    }
  }

  initializeForm(product: Product) {
    this.productForm.setValue({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      inStock: product.inStoke
    });
    this.inStock = product.inStoke;
  }

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
    if (this.isUpdateForm) {
      this._store.dispatch(new updateProduct(this.mapToDestinationType(this.productForm.value), this.userId));
    } else {
      this._store.dispatch(new createProduct(this.mapToDestinationType(this.productForm.value)));
    }

    this.productDetailsLoader$.pipe(val => val, take(1)).subscribe(res => {
      if (res) {
        this.dismissModal();
        if(!this.isUpdateForm){
          this._store.dispatch(new getAllProducts());
        }else{
          this._store.dispatch(new getProductById(this.userId))
        }
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
