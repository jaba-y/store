import { Products } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  id: number;
  @Input() product: any;
  @Output() isDeleted = new EventEmitter();
  @Output() newAdded = new EventEmitter();
  constructor(private productService: ProductService, private router: Router) {
   }
   count = 0;
  ngOnInit() {
  }

  delete(id) {
    this.productService.deleteProducts(id).subscribe(data => {
      this.isDeleted.emit('deleted');
      alert('Product Deleted Successfully');
    });
  }

  addToCart() {
    this.count++;
    console.log(this.count);
    this.newAdded.emit(this.count);
  }
}
