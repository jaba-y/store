// tslint:disable-next-line: max-line-length
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
// tslint:disable-next-line: max-line-length
export class AddProductsComponent implements OnInit {
  data: any;
  addForm: FormGroup;
  id: any;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      isAvailable: new FormControl('')
    });
    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) {
        console.log(params);
        this.productService.filterProducts(this.id).subscribe(response => {
          this.data = response;
          this.addForm.patchValue({
            title: this.data.title,
            description: this.data.description,
            imageUrl: this.data.imageUrl,
            amount: this.data.amount,
            isAvailable: this.data.isAvailable
          });
          console.log(this.data.title);
        });
      }
    });

  }
  onSubmit(form: FormGroup) {
    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) {
        this.productService.updateProducts(form.value, this.id).subscribe(data => {
          alert('Product Updated Successfully');
          this.router.navigate(['']);
        });
      } else {
        this.productService.addProducts(form.value).subscribe(data => {
          alert('Product Added Successfully');
          this.router.navigate(['']);
        });
      }
    });
  }
}
