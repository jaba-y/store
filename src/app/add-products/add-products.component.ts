// tslint:disable-next-line: max-line-length
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Products } from '../model/product';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
// tslint:disable-next-line: max-line-length
export class AddProductsComponent implements OnInit {

  addForm: FormGroup;
  newProduct: Products;
  constructor(private productService: ProductService) {
    console.log('Constructor');
  }
  ngOnInit() {
    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      imageAlt: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      isAvailable: new FormControl('')
    });
    console.log(this.addForm);
  }
  onSubmit(form: FormGroup) {
    if(form.valid){
    console.log('Valid?', form.valid);
    console.log('Name',  form.value.name);
    console.log('Description',  form.value.description);
    console.log('Price',  form.value.price);
    console.log('Image',  form.value.image);
    console.log('ImageAlt',  form.value.imageAlt);
    console.log('IsAvailable',  form.value.isAvailable);
    // const params = form.value;
    // params['id'] = 12;
    this.productService.addProducts(form.value);
    } else {
      alert('Enter all fields');
    }
  }
}
