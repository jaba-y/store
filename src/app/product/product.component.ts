import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;

  // products: Products[];
  constructor(private productService: ProductService) { }
  getProducts(): void {
    this.productService.getProducts().subscribe(Response => {
      console.log('Response', Response);
      this.products = Response;
     } );
  }
  ngOnInit() {
    this.getProducts();
  }
}
