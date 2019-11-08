// tslint:disable-next-line: max-line-length
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
// tslint:disable-next-line: max-line-length
export class AddProductsComponent implements OnInit {

  addForm: FormGroup;
  constructor() {
    console.log('Constructor');
  }
  ngOnInit() {
    this.addForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      imageAlt: new FormControl(''),
      price: new FormControl(''),
      isAvailable: new FormControl('')
    });
  }
  onSubmit(data) {
    console.log('onsubmit', data);
  }
}
