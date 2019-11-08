import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Products } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Products[];
  constructor(private productService: ProductService) { }
  getProducts(): void {
    this.products = this.productService.getProducts();
  }
  ngOnInit() {
    this.getProducts();
  }
}
