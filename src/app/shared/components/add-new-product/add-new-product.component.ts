import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss'],
})
export class AddNewProductComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    productDescription: new FormControl(''),
    productPhoto: new FormControl(''),
    inStock: new FormControl('')
  });


  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  // on Form submit and do post call for creating new product
  onSubmit() {
    console.log(this.productForm.value)
  }

  // for dismissing modal
  dismissModal() {
    this.modalController.dismiss()
  }

  // Form gettors
  get name() {
    return this.productForm.get('name');
  }

}
